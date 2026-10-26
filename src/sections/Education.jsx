import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const educationItems = [
  {
    institution: "ITM (SLS) Baroda University",
    degree: "B. Tech in Computer Science & Engineering",
    period: "June 2023 – May 2027",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks",
      "Specializing in Full-Stack Web Development, REST APIs, and scalable software architecture",
      "Hands-on project work developing responsive platforms in React.js, Node.js, Express.js, and MySQL",
    ],
  },
  {
    institution: "Mar Gregorios Memorial School",
    degree: "Class XII — Science Stream",
    period: "March 2023",
    highlights: [
      "Completed Higher Secondary education with a focus on Physics, Chemistry, and Mathematics",
    ],
  },
  {
    institution: "Mar Gregorios Memorial School",
    degree: "Class X — Secondary School Certificate",
    period: "May 2021",
    highlights: [
      "Completed Secondary School education with a strong foundation in core subjects and extracurricular activities",
    ],
  },
];

const Education = () => {
  const itemRefs = useRef([]);

  useGSAP(() => {
    itemRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 120,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, []);

  const text = `Academic degrees and formal engineering foundations
    grounded in core computer science, software design,
    and computational mathematics.`;

  return (
    <section id="education" className="min-h-screen bg-black pb-16 text-white">
      <AnimatedHeaderSection
        subTitle={"Academic Foundations & Degrees"}
        title={"Education"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col font-light mt-6">
        {educationItems.map((item, index) => (
          <div
            ref={(el) => (itemRefs.current[index] = el)}
            key={index}
            className="px-1 sm:px-1 md:px-3 lg:px-6 pt-8 pb-12 text-white bg-black border-t-2 border-white/30 ultra-small-screen"
          >
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              {/* Header row: Degree & Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
                  {item.degree}
                </h2>
                <span className="text-sm md:text-base text-gold font-light tracking-widest uppercase flex-shrink-0">
                  {item.period}
                </span>
              </div>

              {/* Institution */}
              <p className="text-xl md:text-2xl text-white/60 tracking-wider">
                {item.institution}
              </p>

              {/* Highlight points using the website's numbered row pattern */}
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 text-lg md:text-xl text-white/80 mt-2">
                {item.highlights.map((highlight, hIndex) => (
                  <div key={`edu-${index}-${hIndex}`} className="w-full">
                    <div className="flex items-start w-full">
                      <span className="mr-8 md:mr-12 text-base text-white/30 flex-shrink-0 mt-0.5">
                        0{hIndex + 1}
                      </span>
                      <span className="flex-1 font-light text-white/70 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                    {hIndex < item.highlights.length - 1 && (
                      <div className="w-full h-px my-2.5 bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
