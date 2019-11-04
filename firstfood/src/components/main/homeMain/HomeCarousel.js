import React, { useEffect, useState } from 'react'

import CarouselTitle from './homeCarousel/CarouselTitle'
import CarouselFoot from './homeCarousel/CarouselFoot'

const HomeCarousel = props => {
  const [ptr, setPtr] = useState(0)

  const url = './assets/images/'

  const imgs = [
    'Carousel1.jpg',
    'Carousel2.jpg',
    'Carousel3.jpg',
    'Carousel4.jpg',
    'Carousel5.jpg',
  ]
  const text = [
    '新鮮現採,極甜干貝',
    '香濃肉醬,寬帶麵',
    '爆湯,小籠包',
    '主廚,香煎鱸魚',
    '頂級,松露燉飯',
  ]

  let timeout = null
  //
  const makeIndex = ({ startIndex, interval, length }) => {
    let index = startIndex
    return () => {
      index += interval
      return index % length
    }
  }
  //
  const cyclePlay = startIndex => {
    const index = makeIndex({
      startIndex,
      interval: 1,
      length: imgs.length,
    })
    const interval = 4000
    setPtr(startIndex)

    if (timeout) clearTimeout(timeout)

    const timer = () => {
      setPtr(index())
      timeout = setTimeout(timer, interval)
    }

    timeout = setTimeout(timer, interval)
  }

  const getClassName = index => {
    const NewPtr = ptr
    const length = imgs.length
    return index === NewPtr
      ? 'center'
      : index === (NewPtr + length - 1) % length
      ? 'left'
      : 'right'
  }

  const handleCircleClick = num => {
    clearTimeout(timeout)
    cyclePlay(num)
  }

  useEffect(() => {
    cyclePlay(ptr)
    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <>
      <div id="carousel" className="position-relative">
        <CarouselTitle text={text[ptr]} />
        <div className="carouselBody content">
          <ul className="carousel list-unstyled">
            {imgs.map((image, index) => (
              <li
                title=""
                key={index}
                className={getClassName(index)}
                style={{ backgroundImage: `url(${url}${image})` }}
              ></li>
            ))}
          </ul>
        </div>
        <CarouselFoot handleClick={handleCircleClick} status={ptr} />
      </div>
    </>
  )
}

export default HomeCarousel
