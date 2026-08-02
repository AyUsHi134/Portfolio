import React from "react";
import PropTypes from "prop-types";

// Each variant below reproduces one of the horizontal-padding scales
// currently duplicated across sections (Hero, Skills, and Projects/
// Experience/Contact/Footer each use a distinct one; About uses a fourth,
// rem-based one). The vw values reference the tokens declared in
// styles/tokens.css instead of repeating the raw numbers here.
const PADDING_X = {
  default: "px-4 sm:px-8 md:px-[var(--section-px-narrow)] lg:px-[var(--section-px-wide-a)]",
  narrow: "px-6 md:px-10",
  hero: "px-[var(--section-px-narrow)] lg:px-[var(--section-px-wide-b)]",
  skills: "px-[var(--section-px-mid)] md:px-[var(--section-px-narrow)] lg:px-[var(--section-px-wide-b)]",
};

// "default" matches the vertical rhythm already shared by Projects/
// Experience/Contact; "tight"/"loose" match Hero's and Skills' own values.
const PADDING_Y = {
  default: "py-12 md:py-24",
  tight: "py-4",
  loose: "py-24",
};

const MAX_WIDTH = {
  none: "",
  "3xl": "max-w-3xl mx-auto",
  "4xl": "max-w-4xl mx-auto",
  "7xl": "max-w-7xl mx-auto",
};

const BACKGROUND = {
  flat: "",
  tint: "bg-skills-gradient",
};

const SectionWrapper = ({
  id,
  children,
  paddingX = "default",
  paddingY = "default",
  maxWidth = "none",
  background = "flat",
  className = "",
  style,
}) => {
  const sectionClassName = [
    "font-sans",
    PADDING_X[paddingX],
    PADDING_Y[paddingY],
    BACKGROUND[background],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName} style={style}>
      {maxWidth === "none" ? children : <div className={MAX_WIDTH[maxWidth]}>{children}</div>}
    </section>
  );
};

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  paddingX: PropTypes.oneOf(["default", "narrow", "hero", "skills"]),
  paddingY: PropTypes.oneOf(["default", "tight", "loose"]),
  maxWidth: PropTypes.oneOf(["none", "3xl", "4xl", "7xl"]),
  background: PropTypes.oneOf(["flat", "tint"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SectionWrapper;