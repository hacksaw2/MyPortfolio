import React from 'react';

const InstagramIcon = ({ width = 30, height = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <linearGradient id="grad" x1="0" x2="1" y1="1" y2="0">
      <stop offset="0%" stopColor="#f58529" />
      <stop offset="30%" stopColor="#dd2a7b" />
      <stop offset="60%" stopColor="#8134af" />
      <stop offset="100%" stopColor="#515bd4" />
    </linearGradient>
    <rect width="512" height="512" rx="15%" fill="url(#grad)" />
    <path
      fill="#fff"
      d="M349.33 69.33H162.67A93.34 93.34 0 0 0 69.33 162.67v186.66a93.34 93.34 0 0 0 93.34 93.34h186.66a93.34 93.34 0 0 0 93.34-93.34V162.67a93.34 93.34 0 0 0-93.34-93.34zM432 349.33a82.67 82.67 0 0 1-82.67 82.67H162.67A82.67 82.67 0 0 1 80 349.33V162.67A82.67 82.67 0 0 1 162.67 80h186.66A82.67 82.67 0 0 1 432 162.67z"
    />
    <path
      fill="#fff"
      d="M256 164a92 92 0 1 0 92 92 92 92 0 0 0-92-92zm0 152a60 60 0 1 1 60-60 60 60 0 0 1-60 60zm124-178a22 22 0 1 0 22 22 22 22 0 0 0-22-22z"
    />
  </svg>
);

export default InstagramIcon;
