import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const observerRef = useRef(null);

  // Solid background after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open (SS4)
  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  // Active link tracking
  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    observerRef.current?.disconnect();
    const io = new IntersectionObserver(
      entries => {
        const vis = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target?.id) setActive(vis.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.15, 0.4, 0.75] }
    );
    sections.forEach(s => io.observe(s));
    observerRef.current = io;
    return () => io.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isSolid = scrolled || open; // solid on scroll OR while drawer open

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={`nav-root ${isSolid ? 'nav-solid' : 'nav-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Brand */}
          <button
            className="font-extrabold text-lg md:text-xl tracking-tight text-slate-900"
            onClick={() => goTo('home')}
            aria-label="Go to Home"
          >
            Ayushi<span className="text-primary">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className={`nav-link ${active === link.id ? 'nav-link-active' : ''}`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg nav-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.25 }}
              className="mobile-drawer md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {LINKS.map(link => (
                  <button
                    key={link.id}
                    className={`mobile-link ${active === link.id ? 'mobile-link-active' : ''}`}
                    onClick={() => goTo(link.id)}
                    aria-current={active === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* spacer equal to navbar height (prevents collision with Hero) */}
      <div className="h-16 md:h-20" />
    </>
  );
}
