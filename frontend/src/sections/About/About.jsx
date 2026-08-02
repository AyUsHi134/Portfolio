import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiPostgresql, SiMongodb } from "react-icons/si";
import { getAbout } from "../../services/aboutService";
import {
    EASE_OUT,
    EASE_IN_OUT,
    DURATION_BASE,
    DURATION_FAST,
    DURATION_PULSE,
    ICON_CYCLE_INTERVAL_MS,
} from "../../styles/motion";


const About = () => {
    const defaultData = {
        heading: "Building scalable web applications with clean architecture and modern technologies.",
        paragraph: [
            "A software developer who sees every line of code as a chance to solve problems and create value, building with precision and designing with purpose to make technology feel effortless.",
            "For me, great software isn’t just functional—it’s intuitive, reliable, and built to last.",
        ],
    };

    const [aboutData, setAboutData] = useState(defaultData);
    const [aboutError, setAboutError] = useState(false);
    const prefersReduced = useReducedMotion();

    useEffect(() => {
        const controller = new AbortController();

        const loadAbout = async () => {
            try {
                const data = await getAbout(controller.signal);
                if (data && data.heading && data.paragraph) {
                    setAboutData({
                        heading: data.heading,
                        paragraph: Array.isArray(data.paragraph)
                            ? data.paragraph
                            : [String(data.paragraph)],
                    });
                }
            } catch (err) {
                if (err && err.name === "AbortError") return;
                console.error("[About] GET /about failed:", err);
                setAboutError(true);
            }
        };

        loadAbout();
        return () => controller.abort();
    }, []);

    const AccentWord = ({ children }) => (
        <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
            {children}
        </span>
    );

    const renderHeading = (raw) => {
        const txt = (raw || "").trim();

        const lower = txt.toLowerCase();
        if (
            lower.includes("where") &&
            lower.includes("artistry") &&
            lower.includes("meets") &&
            lower.includes("strategy") &&
            lower.includes("success")
        ) {
            const hasDot = /\.\s*$/.test(txt);
            return (
                <>
                    <span>Where </span>
                    <AccentWord>artistry</AccentWord>
                    <span> meets </span>
                    <br />
                    <AccentWord>strategy</AccentWord>
                    <span> for </span>
                    <AccentWord>success</AccentWord>
                    {hasDot ? <span>.</span> : null}
                </>
            );
        }

        return txt.split(/(artistry|strategy|success)/gi).map((part, i) =>
            /^(artistry|strategy|success)$/i.test(part) ? (
                <AccentWord key={i}>{part}</AccentWord>
            ) : (
                <span key={i}>{part}</span>
            )
        );
    };

    // Cycling tech icon showcase (idea #4)
    const techIcons = [
        { icon: FaReact, label: "React" },
        { icon: FaNodeJs, label: "Node.js" },
        { icon: FaPython, label: "Python" },
        { icon: SiPostgresql, label: "PostgreSQL" },
        { icon: FaDocker, label: "Docker" },
        { icon: SiMongodb, label: "MongoDB" },
    ];

    const [activeIcon, setActiveIcon] = useState(0);

    useEffect(() => {
        if (prefersReduced) return;
        const interval = setInterval(() => {
            setActiveIcon((prev) => (prev + 1) % techIcons.length);
        }, ICON_CYCLE_INTERVAL_MS);
        return () => clearInterval(interval);
    }, [prefersReduced, techIcons.length]);

    const ActiveIcon = techIcons[activeIcon].icon;

    return (
        <section
            id="about"
            className="pt-[120px] pb-20 text-slate-100 scroll-mt-24 md:scroll-mt-28"
        >
            <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
                {/* Heading */}
                <h2 className="font-extrabold tracking-tight leading-[1.08] max-w-[22ch] mx-auto mb-8 md:mb-10
                    text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px]">
                    {renderHeading(aboutData.heading)}
                </h2>

                {/* Cycling icon showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: DURATION_BASE, ease: EASE_OUT }}
                    className="mb-10 md:mb-12"
                >
                    <p className="text-sm md:text-base uppercase tracking-wider text-slate-400 mb-4">
                        Currently building with
                    </p>
                    <div className="relative h-16 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={techIcons[activeIcon].label}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                transition={{ duration: DURATION_FAST, ease: EASE_OUT }}
                                className="flex items-center gap-4"
                            >
                                <ActiveIcon className="text-indigo-300" size={44} />
                                <span className="text-2xl md:text-3xl font-medium text-slate-200">
                                    {techIcons[activeIcon].label}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* About Me label + Open to work badge */}
                <div className="flex items-center justify-center gap-2.5 mb-6 md:mb-8">
                    <span className="text-sm md:text-base uppercase tracking-wider text-indigo-300/90">
                        About Me
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-green-500/10 rounded-full px-3 py-1">
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-green-400"
                            animate={prefersReduced ? {} : { opacity: [1, 0.4, 1] }}
                            transition={{ duration: DURATION_PULSE, repeat: Infinity, ease: EASE_IN_OUT }}
                        />
                        <span className="text-xs text-green-400">Open to work</span>
                    </span>
                </div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: DURATION_BASE, ease: EASE_OUT, delay: 0.1 }}
                    className="space-y-3 md:space-y-4"
                >
                    {aboutData.paragraph.map((line, i) => (
                        <p
                            key={i}
                            className="text-lg leading-relaxed bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent"
                        >
                            {line}
                        </p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;