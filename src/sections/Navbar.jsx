import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const navRef = useRef(null);
  const backdropRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  const sections = ["home", "services", "about", "education", "certifications", "works", "contact"];

  useGSAP(() => {
    // Hide drawer off-screen and backdrop initially
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set(backdropRef.current, { autoAlpha: 0 });
    gsap.set([linksRef.current, contactRef.current], { autoAlpha: 0, x: 15 });

    // Snappy, smooth 0.35s opening timeline
    tl.current = gsap
      .timeline({ paused: true })
      .to(backdropRef.current, {
        autoAlpha: 1,
        duration: 0.25,
        ease: "power2.out",
      })
      .to(
        navRef.current,
        {
          xPercent: 0,
          duration: 0.35,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.04,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.15"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.1"
      );

    // Fast, crisp icon rotation into X
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.5,
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.5,
          duration: 0.2,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(isOpen || currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Dimmed backdrop overlay - clicking outside closes the drawer */}
      <div
        ref={backdropRef}
        onClick={toggleMenu}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-xs transition-opacity duration-200 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      {/* Sleek, compact navigation drawer matching website theme */}
      <nav
        ref={navRef}
        className="fixed top-0 right-0 z-50 flex flex-col justify-between w-full sm:w-[320px] md:w-[350px] max-w-full h-full px-6 sm:px-8 py-6 sm:py-8 bg-black text-white border-l border-white/20 shadow-2xl overflow-y-auto"
      >
        {/* Top title bar (Single burger toggle sits at top-right; no duplicate close button) */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 pr-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-light">
              Navigation
            </span>
          </div>
        </div>

        {/* Navigation links with snappy scroll duration */}
        <div className="flex flex-col gap-y-3 my-auto py-6">
          {sections.map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                className="group flex items-center justify-between py-1.5 text-xl font-light uppercase tracking-widest text-white/70 hover:text-white cursor-pointer transition-colors duration-200"
                to={section}
                smooth
                offset={0}
                duration={650}
                onClick={() => {
                  if (isOpen) toggleMenu();
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/30 font-light">0{index + 1}</span>
                  <span className="group-hover:text-gold transition-colors duration-200">
                    {section}
                  </span>
                </div>
                <Icon
                  icon="lucide:arrow-right"
                  className="size-3.5 text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom contact information with resume download & logos */}
        <div ref={contactRef} className="border-t border-white/20 pt-5 flex flex-col gap-4 font-light">
          {/* Download Resume button in Drawer */}
          <a
            href="/Nishant_Verma_Resume.pdf"
            download="Nishant_Verma_Resume.pdf"
            className="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-full border border-white/30 hover:border-gold text-white hover:text-gold transition-all duration-200 text-xs uppercase tracking-widest font-light group"
          >
            <Icon icon="lucide:download" className="size-3.5 text-gold group-hover:translate-y-0.5 transition-transform duration-200" />
            <span>Download Resume</span>
          </a>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1">
              E-mail
            </p>
            <a
              href="mailto:nishantv181@gmail.com"
              className="flex items-center gap-2 text-xs tracking-wider lowercase text-white/80 hover:text-gold transition-colors duration-200"
            >
              <Icon icon="lucide:mail" className="size-3.5 text-white/60" />
              <span>nishantv181@gmail.com</span>
            </a>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/40 mb-2">
              Social Media
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {socials && socials.length > 0 ? (
                socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    aria-label={social.name}
                    className="p-2 rounded-full border border-white/20 hover:border-gold hover:text-gold hover:scale-105 transition-all duration-200 text-white/80 flex items-center justify-center"
                  >
                    <Icon icon={social.icon} className="size-3.5" />
                  </a>
                ))
              ) : null}
            </div>
          </div>
        </div>
      </nav>

      {/* The single floating toggle button (open/close) */}
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1.5 transition-all duration-200 bg-black text-white border border-white/30 rounded-full cursor-pointer shadow-lg hover:border-gold w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 top-4 right-4 sm:top-5 sm:right-6 md:top-6 md:right-8"
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
        style={
          showBurger
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-5 h-0.5 bg-white rounded-full origin-center"
        />
        <span
          ref={bottomLineRef}
          className="block w-5 h-0.5 bg-white rounded-full origin-center"
        />
      </div>
    </>
  );
};

export default Navbar;
