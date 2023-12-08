import React from 'react'

const TitleText = ({ children, className }) => {
  return (
    <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 cursor-pointer ${className}`}>
    {children}
  </h1>
  )
}

export default TitleText