import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer, useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

function WebGLRecoveryHandler({ onRestore }) {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    if (!canvas) return;

    const handleContextLost = (event) => {
      // Essential: prevents browser from permanently destroying WebGL context
      event.preventDefault();
      console.warn("WebGL context lost on mobile device. Preventing default destruction.");
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored. Reloading 3D assets...");
      try {
        useGLTF.clear("/models/Planet.glb");
      } catch (err) {
        console.error("Failed to clear useGLTF cache:", err);
      }
      if (onRestore) {
        onRestore();
      }
    };

    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    canvas.addEventListener("webglcontextrestored", handleContextRestored, false);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, [gl, onRestore]);

  return null;
}

const Hero = () => {
  const heroRef = useRef(null);
  const [isInView, setIsInView] = useState(true);
  const [canvasKey, setCanvasKey] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const handleRestore = useCallback(() => {
    setCanvasKey((prev) => prev + 1);
  }, []);

  // Pause rendering when Hero is scrolled out of view to save mobile GPU VRAM & battery
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "300px", // Pre-render 300px before hero scrolls back into view
        threshold: 0,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const text = `Full-Stack Developer building scalable web applications,
robust backend systems & interactive
digital platforms with clean code`;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex flex-col justify-end min-h-screen overflow-hidden"
    >
      <AnimatedHeaderSection
        subTitle={"Computer Science Student | Full-Stack Developer"}
        title={"Nishant Verma"}
        text={text}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      >
        <Canvas
          key={canvasKey}
          shadows
          frameloop={isInView ? "always" : "never"}
          resize={{ scroll: false }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          gl={{
            powerPreference: "high-performance",
            antialias: true,
            preserveDrawingBuffer: true,
            alpha: true,
            failIfMajorPerformanceCaveat: false,
          }}
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <WebGLRecoveryHandler onRestore={handleRestore} />
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.65 : 1} />
          </Float>
          <Environment resolution={isMobile ? 128 : 256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
