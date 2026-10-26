import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop animation (full range)
    mm.add("(min-width: 768px)", () => {
      gsap.to("#title-service-1", {
        xPercent: 20,
        scrollTrigger: {
          target: "#title-service-1",
          scrub: true,
        },
      });
      gsap.to("#title-service-2", {
        xPercent: -30,
        scrollTrigger: {
          target: "#title-service-2",
          scrub: true,
        },
      });
      gsap.to("#title-service-3", {
        xPercent: 100,
        scrollTrigger: {
          target: "#title-service-3",
          scrub: true,
        },
      });
      gsap.to("#title-service-4", {
        xPercent: -100,
        scrollTrigger: {
          target: "#title-service-4",
          scrub: true,
        },
      });
    });

    // Mobile & Tablet animation (controlled range so text stays visible)
    mm.add("(max-width: 767px)", () => {
      gsap.to("#title-service-1", {
        xPercent: 6,
        scrollTrigger: {
          target: "#title-service-1",
          scrub: true,
        },
      });
      gsap.to("#title-service-2", {
        xPercent: -6,
        scrollTrigger: {
          target: "#title-service-2",
          scrub: true,
        },
      });
      gsap.to("#title-service-3", {
        xPercent: 8,
        scrollTrigger: {
          target: "#title-service-3",
          scrub: true,
        },
      });
      gsap.to("#title-service-4", {
        xPercent: -8,
        scrollTrigger: {
          target: "#title-service-4",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="mt-12 sm:mt-16 md:mt-20 overflow-hidden font-light leading-snug text-center mb-20 sm:mb-28 md:mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-2 sm:gap-3 translate-x-2 sm:translate-x-6 md:translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-6 sm:w-10 md:w-32 h-0.5 md:h-1 bg-gold flex-shrink-0" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-1.5 sm:gap-3 -translate-x-3 sm:-translate-x-8 md:-translate-x-48 whitespace-nowrap text-[17px] sm:text-[28px] md:text-[42px] lg:text-[52px] xl:text-[62px] 2xl:text-[100px]"
      >
        <p>APIs</p>
        <div className="w-4 sm:w-8 md:w-32 h-0.5 md:h-1 bg-gold flex-shrink-0" />
        <p className="italic">Frontends</p>
        <div className="w-4 sm:w-8 md:w-32 h-0.5 md:h-1 bg-gold flex-shrink-0" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-3 sm:translate-x-8 md:translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
