import React, { useEffect, useRef, useState, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SOCIAL_LINKS } from "../../data/socials";

const NAV_ITEMS = [
  { id: "home",       label: "Home"       },
  { id: "about",      label: "About"      },
  { id: "skills",     label: "Skills"     },
  { id: "projects",   label: "Projects"   },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact"    },
];

// Hoisted out of Navbar so it isn't redefined (and its subtree remounted)
// on every Navbar render.
const SocialIcons = ({ onLinkClick }) => (
  <div className="flex items-center gap-4">
    {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onClick={onLinkClick}
        className="text-gray-300 hover:text-brand transition-colors duration-200 pointer-events-auto"
      >
        <Icon size={22} />
      </a>
    ))}
  </div>
);

const Navbar = () => {
  const [isMenuOpen,    setIsMenuOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled,    setIsScrolled]    = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = useCallback((id) => {
    setActiveSection(id);
    setIsMenuOpen(false);

    const target = document.getElementById(id);
    if (!target) return;

    // Offset by the topbar's own height (not the whole `nav`, which also
    // includes the mobile dropdown while it's open) so the section lands
    // just below the fixed navbar instead of partially behind it.
    const navHeight = barRef.current?.offsetHeight ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
  }, []);

  const navLinkClass = (id) =>
    `cursor-pointer transition-colors duration-200 hover:text-brand ${
      activeSection === id ? "text-brand" : "text-gray-300"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-page/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* 
        3-column grid: [logo] [nav links] [social icons]
        Each column takes equal space (grid-cols-3), so the center
        nav links are always truly centered and the outer columns
        never crowd them — no padding hacks required.
      */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/*
          Mobile  (<1024px): flex justify-between → only logo + hamburger, no ghost columns
          Desktop (≥1024px): grid grid-cols-3    → logo | nav links | social icons, truly centered
        */}
        <div ref={barRef} className="flex justify-between lg:grid lg:grid-cols-3 items-center py-5 text-white">

          {/* ── Logo (left) ── */}
          <div className="flex items-center justify-start">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="text-lg md:text-xl lg:text-lg font-semibold bg-transparent border-none outline-none cursor-pointer text-white whitespace-nowrap"
              aria-label="Go to top"
            >
              <span className="text-brand">{"< "}</span>
              Ayushi
              <span className="text-brand">{" / "}</span>
              Singh
              <span className="text-brand">{" >"}</span>
            </button>
          </div>

          {/* ── Nav links (center) — desktop only ── */}
          <ul className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 list-none m-0 p-0">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id} className={navLinkClass(id)}>
                <button
                  type="button"
                  className="bg-transparent border-none outline-none cursor-pointer text-inherit"
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Social icons (right) — desktop only ──
              pointer-events-none on the column: the centered nav <ul> can
              overflow into this column at its narrower widths, and this
              column's own empty space would otherwise sit on top of it and
              swallow clicks (the icons opt back in via pointer-events-auto). */}
          <div className="hidden lg:flex items-center justify-end pointer-events-none">
            <SocialIcons />
          </div>

          {/* ── Hamburger — mobile only ── */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              className="text-brand bg-transparent border-none outline-none cursor-pointer"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile dropdown — overlays page content because parent nav is position:fixed ── */}
      {isMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden bg-page/95 backdrop-blur-lg shadow-lg">
          <ul className="flex flex-col items-center gap-3 py-4 list-none m-0 p-0 text-gray-300">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id} className={navLinkClass(id)}>
                <button
                  type="button"
                  className="bg-transparent border-none outline-none cursor-pointer text-inherit"
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <SocialIcons onLinkClick={() => setIsMenuOpen(false)} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;