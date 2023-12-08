// DescriptionText.js
import React from 'react';

const DescriptionText = ({ children, className }) => {
  return (
    <p className={`lg:w-2/3 mx-auto leading-relaxed text-base ${className}`}>
      {children}
    </p>
  );
};

export default DescriptionText;
