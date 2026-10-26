import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const certificationItems = [
  {
    organization: "Edunet Foundation & SAP",
    title: "Code Unnati Program — AI & Foundations",
    period: "2024 – 2025",
    domain: "Python • C++ • Artificial Intelligence • SAP Chatbot",
    highlights: [
      "Mastered Python programming and C++ object-oriented fundamentals",
      "Designed and developed intelligent conversational AI chatbots with automated assistant capabilities",
      "Applied algorithmic problem-solving to real-world conversational interfaces",
    ],
  },
  {
    organization: "Edunet Foundation & SAP",
    title: "Advanced Course in Emerging Technologies",
    period: "2025 – 2026",
    domain: "AI & ML • Deep Learning • Edge Computing • SAP Analytics Cloud • ABAP on BTP",
    highlights: [
      "Advanced neural network architectures, deep learning model training, and edge device deployment",
      "Enterprise cloud solutions with SAP Analytics Cloud for data visualization and business intelligence",
      "Cloud-native enterprise backend extensions utilizing SAP ABAP on Business Technology Platform (BTP)",
    ],
  },
];

const Certifications = () => {
  const itemRefs = useRef([]);

  useGSAP(() => {
    itemRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 100,
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

  const text = `Specialized training programs in artificial intelligence,
    machine learning, edge computing,
    and enterprise cloud platforms.`;

  return (
    <section
      id="certifications"
      className="min-h-screen bg-black rounded-b-4xl pb-24 text-white"
    >
      <AnimatedHeaderSection
        subTitle={"Specialized Training & Professional Credentials"}
        title={"Certifications"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col font-light mt-6">
        {certificationItems.map((item, index) => (
          <div
            ref={(el) => (itemRefs.current[index] = el)}
            key={index}
            className="px-1 sm:px-1 md:px-3 lg:px-6 pt-8 pb-12 text-white bg-black border-t-2 border-white/30 ultra-small-screen"
          >
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              {/* Header: Title & Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
                  {item.title}
                </h2>
                <span className="text-sm md:text-base text-gold font-light tracking-widest uppercase flex-shrink-0">
                  {item.period}
                </span>
              </div>

              {/* Organization & Domain */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xl md:text-2xl text-white/60 tracking-wider">
                <p>{item.organization}</p>
                <span className="text-sm md:text-base text-white/40 font-mono tracking-normal">
                  {item.domain}
                </span>
              </div>

              {/* Highlight list */}
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 text-lg md:text-xl text-white/80 mt-2">
                {item.highlights.map((highlight, hIndex) => (
                  <div key={`cert-${index}-${hIndex}`} className="w-full">
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

export default Certifications;

