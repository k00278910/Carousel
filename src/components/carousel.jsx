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
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {data.map((item, idx) => {
        // eslint-disable-next-line react/jsx-key
        return <img src={item.src} alt={item.alt} key={idx} className="slide" />
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button key={idx} onClick={null} className="indicator"></button>
          )
        })}
      </span>
    </div>
  )
}
