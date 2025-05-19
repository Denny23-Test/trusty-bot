import React from 'react';

/**
 * Logo component for Trusty AI
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes for the SVG
 * @param {number} [props.width=25] - Width of the SVG
 * @param {number} [props.height=30] - Height of the SVG
 * @returns {JSX.Element} Logo component
 */
function Logo({ className = "", width = 25, height = 30 }) {
  return (
    <svg 
      className={`trusty-inline-flex ${className}`} 
      width={width} 
      height={height} 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1" 
      viewBox="0 0 1024 1204.7"
    >
      <polygon 
        fill="#0072ce" 
        points="1024 -1.3 0 179.4 0 1203.4 755.5 1070.1 933.5 1206 933.5 1038.7 1024 1022.7 1024 -1.3"
      />
      <path 
        fill="#fff" 
        d="M341.1,515.7c20.4,0,37.6-7.1,52-21.4s21.4-31.5,21.4-52-7.1-37.6-21.4-52c-14.2-14.2-31.5-21.4-52-21.4s-37.6,7.1-52,21.4-21.4,31.5-21.4,52,7.1,37.6,21.4,52c14.2,14.2,31.5,21.4,52,21.4Z"
      />
      <path 
        fill="#fff" 
        d="M683,515.7c20.4,0,37.6-7.1,52-21.4s21.4-31.5,21.4-52-7.1-37.6-21.4-52c-14.2-14.2-31.5-21.4-52-21.4s-37.6,7.1-52,21.4-21.4,31.5-21.4,52,7.1,37.6,21.4,52c14.2,14.2,31.5,21.4,52,21.4Z"
      />
      <path 
        fill="#fff" 
        d="M361.2,786.2c45.2,31.3,95.4,47,150.8,47h.1c55.3,0,105.6-15.7,150.8-47,45.2-31.3,78-72.7,98.3-124h-498.2c20.4,51.3,53.1,92.6,98.3,124h0Z"
      />
    </svg>
  );
}

export default Logo;