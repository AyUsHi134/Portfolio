import React from "react";
import PropTypes from "prop-types";

// "default" reproduces the heading block shared verbatim by Projects/
// Experience/Contact; "lg" reproduces Skills' distinct (larger title,
// tighter spacing) variant.
const WRAPPER_MARGIN = {
  default: "mb-8 md:mb-16",
  lg: "mb-8",
};

const TITLE_SIZE = {
  default: "text-2xl md:text-4xl",
  lg: "text-3xl sm:text-4xl",
};

const UNDERLINE_SIZE = {
  default: "w-20 md:w-32 h-1 mx-auto mt-4",
  lg: "w-24 h-1 mx-auto mt-2",
};

const SUBTITLE_SIZE = {
  default: "text-base md:text-lg px-4",
  lg: "text-lg",
};

const ACCENT_COLOR = {
  purple: "bg-purple-500",
  brand: "bg-brand",
};

const SectionHeading = ({ title, subtitle, size = "default", accent = "purple" }) => (
  <div className={`text-center ${WRAPPER_MARGIN[size]}`}>
    <h2 className={`${TITLE_SIZE[size]} font-bold text-white`}>{title}</h2>
    <div className={`${UNDERLINE_SIZE[size]} ${ACCENT_COLOR[accent]}`}></div>
    {subtitle && (
      <p className={`text-gray-400 mt-4 font-semibold ${SUBTITLE_SIZE[size]}`}>{subtitle}</p>
    )}
  </div>
);

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  size: PropTypes.oneOf(["default", "lg"]),
  accent: PropTypes.oneOf(["purple", "brand"]),
};

export default SectionHeading;