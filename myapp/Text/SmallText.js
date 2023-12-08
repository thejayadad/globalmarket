// Text.js
import React from 'react';

const Text = ({ children, className }) => {
  return (
    <p className={`text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 cursor-pointer ${className}`}>
      {children}
    </p>
  );
};

export default Text;
