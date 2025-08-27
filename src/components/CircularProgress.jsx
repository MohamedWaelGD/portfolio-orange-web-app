import React from "react";

const CircularProgress = ({
  percentage = 75,
  size = 130,
  strokeWidth = 12,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        className={"stroke-fade-dark"}
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FD6F00" />
          <stop offset="100%" stopColor="#E46400" />
        </linearGradient>
      </defs>

      {/* Percentage Text */}
      {/*<text*/}
      {/*  x="50%"*/}
      {/*  y="50%"*/}
      {/*  dy="0.3em"*/}
      {/*  textAnchor="middle"*/}
      {/*  fontSize="20"*/}
      {/*  fill="#333"*/}
      {/*>*/}
      {/*  {percentage}%*/}
      {/*</text>*/}
    </svg>
  );
};

export default CircularProgress;
