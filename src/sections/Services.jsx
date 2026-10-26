import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  const text = `Leveraging my computer science background and full-stack engineering expertise.
    Here are the core areas I specialize in:`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); // 768px

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 120,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        duration: 0.8,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Technical Competencies & Expertise"}
        title={"Skills"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="relative md:sticky px-4 sm:px-6 md:px-8 lg:px-12 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : undefined
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed tracking-normal sm:tracking-wider md:tracking-widest text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-base sm:text-xl md:text-2xl lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`} className="w-full">
                    <h3 className="flex items-baseline w-full">
                      <span className="mr-4 sm:mr-8 md:mr-12 text-sm sm:text-base md:text-lg text-white/30 flex-shrink-0">
                        0{itemIndex + 1}
                      </span>
                      <span className="flex-1">{item.title}</span>
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
