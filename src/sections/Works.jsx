import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);

  const text = `Featured projects and systems meticulously
    crafted with modern stacks to deliver
    seamless performance and reliability.`;

  useGSAP(() => {
    gsap.from(".project-item", {
      y: 80,
      opacity: 0,
      delay: 0.2,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".project-item",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <section id="works" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Full-Stack Applications & Solutions"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.href || "#"}
            target={project.href ? "_blank" : undefined}
            rel={project.href ? "noopener noreferrer" : undefined}
            className="project-item relative flex flex-col gap-1 py-4 md:py-5 cursor-pointer group md:gap-0 no-underline"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

            {/* title */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 text-black transition-all duration-500 md:group-hover:px-14 md:group-hover:text-white">
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-snug flex-1 pr-3">
                {project.name}
              </h2>
              <Icon
                icon="lucide:arrow-up-right"
                className="size-5 md:size-6 flex-shrink-0"
              />
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80 my-1" />
            {/* framework */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 sm:px-6 md:px-8 lg:px-12 text-xs sm:text-sm leading-loose uppercase transition-all duration-500 md:group-hover:px-14">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile preview image */}
            <div className="relative flex items-center justify-center w-full px-4 my-3 md:hidden h-[240px] sm:h-[320px]">
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={project.bgImage}
                  alt={`${project.name}-bg-image`}
                  className="absolute inset-0 object-cover w-full h-full brightness-50"
                />
                <img
                  src={project.image}
                  alt={`${project.name}-image`}
                  className="relative z-10 max-w-[88%] max-h-[82%] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
