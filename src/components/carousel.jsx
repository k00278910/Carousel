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
    // if slide image is equal to max, wrap it around to first image
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    // if slide image is equal to zero, wrap it around to final image
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
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
              onClick={() => setSlide(idx)}
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
