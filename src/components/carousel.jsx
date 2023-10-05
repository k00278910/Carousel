/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
export const Carousel = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill />
      {data.map((item, idx) => {
        // eslint-disable-next-line react/jsx-key
        return <img src={item.src} alt={item.alt} key={idx} className="slide" />
      })}
      <BsArrowRightCircleFill />
    </div>
  )
}
