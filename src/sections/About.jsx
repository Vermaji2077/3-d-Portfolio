import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const About = () => {
  const text = `Passionate about clean architecture & problem solving
    I build scalable, high-performance web applications
    from concept to production`;
  const aboutText = `Computer Science undergraduate at ITM (SLS) Baroda University (2023–2027) with hands-on experience building full-stack platforms, interactive learning tools, and e-commerce applications. Strong foundation in Data Structures, Algorithms, OOP, and modern software engineering.
  Key pillars of my work:`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.98,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black pb-16">
      <AnimatedHeaderSection
        subTitle={"Computer Science Undergraduate • ITM (SLS) Baroda University"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-1 sm:px-1 md:px-3 lg:px-6 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 ultra-small-screen">
        <img
          ref={imgRef}
          src="images/pfp.png"
          alt="Nishant Verma"
          className="w-md rounded-3xl"
        />
        <div className="w-full">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:code" className="text-white/80" />
              <span>Full-Stack Development with React.js, Node.js, Express.js & MySQL</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:workflow" className="text-white/80" />
              <span>Event-driven workflows with Inngest, Stripe payments & Neon Postgres</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:bot" className="text-white/80" />
              <span>DSA Visualizer & AI Chatbot, SAP Emerging Tech & Deep Learning</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:graduation-cap" className="text-white/80" />
              <span>B.Tech in CSE at ITM (SLS) Baroda University • Code Unnati (SAP) Certified</span>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="mt-8 pt-2">
            <a
              href="/Nishant_Verma_Resume.pdf"
              download="Nishant_Verma_Resume.pdf"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/30 rounded-full text-white text-base md:text-lg font-light uppercase tracking-widest hover:border-gold hover:text-gold hover:scale-105 transition-all duration-300 group"
            >
              <Icon
                icon="lucide:download"
                className="size-5 text-gold group-hover:translate-y-0.5 transition-transform duration-200"
              />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
