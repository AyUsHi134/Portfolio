import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import characterImg from "../../assets/aboutmepic.png";
import reactLogo from "../../assets/react-logo.png";
import jsLogo from "../../assets/JS-logo.png";
import mongoLogo from "../../assets/MongoDB-logo.png";

const About = () => {
    const defaultData = {
        heading: "Where artistry meets strategy for success.",
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
                const res = await fetch("/api/about", { signal: controller.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const data = await res.json();
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

    return (
        <section
            id="about"
            className="pt-[120px] pb-36 text-slate-100 scroll-mt-24 md:scroll-mt-28"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Heading */}
                <div className="mx-auto text-center mb-16 md:mb-24">
                    <h2 className="font-extrabold tracking-tight leading-[1.03] max-w-[24ch] mx-auto
                        text-[28px] sm:text-[38px] md:text-[48px] lg:text-[60px] xl:text-[68px]">
                        {renderHeading(aboutData.heading)}
                    </h2>
                </div>

                {/* Content */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Graphic (Left on Desktop) */}
                    <div className="order-2 lg:order-1 flex justify-center">
                        <div className="relative h-[min(60vh,700px)] w-full max-w-[800px]">
                            {/* Circle Background */}
                            <div className="absolute inset-0 rounded-full bg-[#2e2e3f] opacity-30 z-0" />

                            {/* Character */}
                            <motion.img
                                src={characterImg}
                                alt="Character"
                                className="relative z-10 w-[80%] md:w-[70%] max-w-[400px] drop-shadow-2xl"
                                animate={prefersReduced ? {} : { y: [0, -6, 0] }}
                                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            {/* Rotating Icons */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                animate={prefersReduced ? {} : { rotate: [0, 360] }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <motion.img
                                    src={reactLogo}
                                    alt="React"
                                    className="absolute w-10 md:w-12 lg:w-14"
                                    style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
                                    animate={prefersReduced ? {} : { y: [0, -6, 0] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                />

                                {/* JavaScript */}
                                <motion.img
                                    src={jsLogo}
                                    alt="JavaScript"
                                    className="absolute w-10 md:w-12 lg:w-14"
                                    style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }}
                                    animate={prefersReduced ? {} : { y: [0, -6, 0] }}
                                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                />

                                {/* MongoDB */}
                                <motion.img
                                    src={mongoLogo}
                                    alt="MongoDB"
                                    className="absolute w-10 md:w-12 lg:w-14"
                                    style={{ top: "50%", right: "5%", transform: "translateY(-50%)" }}
                                    animate={prefersReduced ? {} : { y: [0, -6, 0] }}
                                    transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2 space-y-5">
                        <div className="text-sm md:text-base uppercase tracking-wider text-indigo-300/90">
                            About Me
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {aboutData.paragraph.map((line, i) => (
                                <p
                                    key={i}
                                    className="text-lg leading-relaxed bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent"
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
