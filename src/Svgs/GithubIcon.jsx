import React from 'react';

const GitHubIcon = ({ width = 30, height = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <defs>
      <linearGradient id="github-grad" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0%" stopColor="#6f42c1" />
        <stop offset="50%" stopColor="#0366d6" />
        <stop offset="100%" stopColor="#28a745" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="12" fill="url(#github-grad)" />
    <path
      fill="#fff"
      d="M12 2a10 10 0 0 0-3.16 19.47c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1 1.53 1 .88 1.5 2.32 1.07 2.89.82.09-.64.35-1.07.64-1.31-2.22-.26-4.56-1.11-4.56-4.94a3.86 3.86 0 0 1 1-2.68c-.1-.26-.44-1.32.1-2.75 0 0 .83-.27 2.73 1.02a9.48 9.48 0 0 1 5 0c1.9-1.3 2.73-1.02 2.73-1.02.54 1.43.2 2.5.1 2.75a3.86 3.86 0 0 1 1 2.68c0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.72c0 .26.18.57.68.48A10 10 0 0 0 12 2Z"
    />
  </svg>
);

export default GitHubIcon;
