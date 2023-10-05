/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Carousel.css'

// eslint-disable-next-line react/prop-types
export const Carousel = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  return (
    <div>
      {data.map((item, idx) => {
        // eslint-disable-next-line react/jsx-key
        return <img src={item.src} alt={item.alt} key={idx} />
      })}
    </div>
  )
}
