import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
  const text = `Have a question, collaboration opportunity, or project idea?
    I'd love to hear from you and discuss how we can work together!`;
  const items = [
    "Say Hello",
    "Open For Work",
    "Full-Stack Dev",
    "Let's Chat",
    "Get In Touch",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 80,
      opacity: 0,
      delay: 0.3,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Get In Touch • Let's Collaborate"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-4 sm:px-6 md:px-8 lg:px-12 font-light text-white uppercase mb-12 sm:mb-16">
          <div className="flex flex-col w-full gap-8 sm:gap-10">
            <div className="social-link">
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] tracking-wider mb-1">
                E-mail
              </h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="flex items-center gap-3 text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider lowercase">
                <Icon icon="lucide:mail" className="size-5 sm:size-6 text-white/60 flex-shrink-0" />
                <a
                  href="mailto:nishantv181@gmail.com"
                  className="hover:text-gold transition-colors duration-200 break-all sm:break-normal"
                >
                  nishantv181@gmail.com
                </a>
              </p>
            </div>
            <div className="social-link">
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] tracking-wider mb-1">
                Phone
              </h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="flex items-center gap-3 text-base sm:text-xl md:text-2xl lg:text-3xl lowercase">
                <Icon icon="lucide:phone" className="size-5 sm:size-6 text-white/60 flex-shrink-0" />
                <a
                  href="tel:+918980264859"
                  className="hover:text-gold transition-colors duration-200"
                >
                  +91 8980264859
                </a>
              </p>
            </div>
            <div className="social-link">
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] tracking-wider mb-1">
                Resume
              </h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="flex items-center gap-3 text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider uppercase">
                <Icon icon="lucide:file-down" className="size-5 sm:size-6 text-gold flex-shrink-0" />
                <a
                  href="/Nishant_Verma_Resume.pdf"
                  download="Nishant_Verma_Resume.pdf"
                  className="hover:text-gold transition-colors duration-200 tracking-wider text-sm sm:text-base md:text-xl font-light break-all sm:break-normal"
                >
                  Download Nishant_Verma_Resume.pdf
                </a>
              </p>
            </div>
            <div className="social-link">
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] tracking-wider mb-1">
                Social Media
              </h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    aria-label={social.name}
                    className="p-2.5 sm:p-3 border border-white/20 rounded-full hover:border-gold hover:text-gold hover:scale-110 transition-all duration-300 text-white flex items-center justify-center"
                  >
                    <Icon icon={social.icon} className="size-5 sm:size-6 md:size-7" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
