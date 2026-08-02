import React from "react";
import PropTypes from "prop-types";

const PADDING = {
  none: "",
  default: "p-4 md:p-6",
};

// Base recipe shared by Projects' project cards, Experience's timeline
// card, and Contact's form card. The optional flags below reproduce the
// small differences between them: Experience/Contact add a subtle
// opacity lift on hover, Projects adds a clipped hover-scale on its image.
const Card = ({
  as: Component = "div",
  children,
  padding = "default",
  hoverLift = false,
  hoverScale = false,
  className = "",
  ...rest
}) => {
  const cardClassName = [
    "bg-gray-800 bg-opacity-80 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-glow",
    PADDING[padding],
    hoverLift && "hover:bg-opacity-90",
    hoverScale && "overflow-hidden hover:scale-[1.02]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={cardClassName} {...rest}>
      {children}
    </Component>
  );
};

Card.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  padding: PropTypes.oneOf(["none", "default"]),
  hoverLift: PropTypes.bool,
  hoverScale: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;