import React from 'react'

export default function FullContainer({ children, className = '' }) {
  return (
    <div className={`w-full px-4 py-12 md:px-10 md:py-14 lg:py-20 xl:py-28 ${className}`}>
      {children}
    </div>
  )
}
