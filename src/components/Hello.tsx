import React, { useEffect } from "react";
import anime from "animejs";

const CustomSVG = () => {
  useEffect(() => {
    anime({
      targets: ".welcome-container #svgGroup path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInQuad",
      duration: 4000,
      complete: () => {
        anime({
          targets: ".welcome-container #svgGroup path",
          fill: ["#00000000", "rgba(38, 237, 216, 0.72)"],
          duration: 1000,
          easing: "easeInQuad",
        });
      },
    });
  }, []);
  return (
    <svg width="450" viewBox="0 0 384.1 90" xmlns="http://www.w3.org/2000/svg">
      <g
        className="lines"
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        stroke="rgba(38, 237, 216, 0.72)"
        strokeWidth="0.25mm"
        fill="#00000000"
      >
        <path
          d="M 6.4 71.401 L 0 71.401 L 0 1.401 L 6.4 1.401 L 6.4 33.401 L 42 33.401 L 42 1.401 L 48.4 1.401 L 48.4 71.401 L 42 71.401 L 42 39.201 L 6.4 39.201 L 6.4 71.401 Z M 108.3 71.401 L 65.6 71.401 L 65.6 1.401 L 107.9 1.401 L 107.9 7.201 L 72 7.201 L 72 33.401 L 105.1 33.401 L 105.1 39.201 L 72 39.201 L 72 65.601 L 108.3 65.601 L 108.3 71.401 Z M 165.5 71.401 L 122.3 71.401 L 122.3 1.401 L 128.7 1.401 L 128.7 65.601 L 165.5 65.601 L 165.5 71.401 Z M 220.2 71.401 L 177 71.401 L 177 1.401 L 183.4 1.401 L 183.4 65.601 L 220.2 65.601 L 220.2 71.401 Z M 227.7 44.301 L 227.7 28.501 A 42.988 42.988 0 0 1 228.413 20.41 Q 229.313 15.716 231.352 12.074 A 21.673 21.673 0 0 1 235 7.251 A 24.41 24.41 0 0 1 247.907 0.607 A 35.286 35.286 0 0 1 254.6 0.001 A 33.743 33.743 0 0 1 263.081 1.01 A 24.01 24.01 0 0 1 274.2 7.251 A 23.063 23.063 0 0 1 279.896 16.859 Q 281.049 20.51 281.373 24.927 A 48.836 48.836 0 0 1 281.5 28.501 L 281.5 44.301 A 42.988 42.988 0 0 1 280.787 52.392 Q 279.887 57.086 277.848 60.728 A 21.673 21.673 0 0 1 274.2 65.551 A 24.41 24.41 0 0 1 261.293 72.195 A 35.286 35.286 0 0 1 254.6 72.801 A 33.743 33.743 0 0 1 246.119 71.792 A 24.01 24.01 0 0 1 235 65.551 A 23.063 23.063 0 0 1 229.304 55.943 Q 228.151 52.292 227.827 47.875 A 48.836 48.836 0 0 1 227.7 44.301 Z M 275.1 44.501 L 275.1 28.301 A 34.464 34.464 0 0 0 274.524 21.796 Q 273.796 18.012 272.148 15.054 A 18.034 18.034 0 0 0 269.75 11.701 A 17.41 17.41 0 0 0 260.422 6.407 A 26.431 26.431 0 0 0 254.6 5.801 Q 244.9 5.801 239.5 11.701 Q 234.1 17.601 234.1 28.301 L 234.1 44.501 A 34.154 34.154 0 0 0 234.681 51.006 Q 235.425 54.838 237.122 57.823 A 18.023 18.023 0 0 0 239.5 61.101 A 17.666 17.666 0 0 0 249.203 66.478 A 26.399 26.399 0 0 0 254.6 67.001 A 26.058 26.058 0 0 0 260.812 66.304 A 17.314 17.314 0 0 0 269.75 61.101 Q 274.473 55.893 275.027 46.943 A 39.569 39.569 0 0 0 275.1 44.501 Z M 295.3 83.001 L 292.8 83.001 L 292.8 78.801 L 295.2 78.801 Q 297.739 78.801 298.264 76.786 A 4.715 4.715 0 0 0 298.4 75.601 L 298.4 72.401 L 297.1 72.401 Q 294.7 72.401 293.05 70.851 A 5.141 5.141 0 0 1 291.404 67.124 A 6.812 6.812 0 0 1 291.4 66.901 A 5.709 5.709 0 0 1 291.739 64.901 A 5.074 5.074 0 0 1 293.05 62.951 A 5.665 5.665 0 0 1 296.951 61.403 A 7.326 7.326 0 0 1 297.1 61.401 A 5.75 5.75 0 0 1 299.485 61.888 A 5.587 5.587 0 0 1 301.15 63.051 A 5.496 5.496 0 0 1 302.8 67.026 A 6.932 6.932 0 0 1 302.8 67.101 L 302.8 75.401 A 11.141 11.141 0 0 1 302.441 78.363 Q 301.505 81.751 298.126 82.664 A 10.848 10.848 0 0 1 295.3 83.001 Z"
          vector-effect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
};

export default CustomSVG;