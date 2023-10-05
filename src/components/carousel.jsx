/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
export const Carousel = ({ data }) => {
  // set variable & state for slide
  // eslint-disable-next-line no-unused-vars
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide - 1)
  }

  // eslint-disable-next-line react/prop-types
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => {
        // eslint-disable-next-line react/jsx-key
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            // only show slide at current index
            className={slide === idx ? 'slide' : 'slide slide-hidden'}
          />
        )
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className={'indicators'}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={null}
              className={
                slide === idx ? 'indicator' : 'indicator indicator-inactive'
              }
            ></button>
          )
        })}
      </span>
    </div>
  )
}
