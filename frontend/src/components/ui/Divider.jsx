import React from "react";
import PropTypes from "prop-types";

// A standalone seam rendered between sections, rather than a clip-path cut
// into a section's own edge — its height stays fixed regardless of either
// neighbor's content length, and the single diagonal mirrors cleanly via
// `flip`, so alternating instances produce a consistent zig-zag.
const Divider = ({ flip = false, height = 64, className = "" }) => (
  <div
    aria-hidden="true"
    className={className}
    style={{
      height,
      clipPath: flip ? "polygon(0 0, 100% 0, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%)",
    }}
  />
);

Divider.propTypes = {
  flip: PropTypes.bool,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Divider;