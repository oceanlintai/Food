import React from 'react'
import Logo from '../../../../assets/images/logo2.svg'

const CarouselTitle = props => {
  const { text } = props
  const newText = text.split(',')
  return (
    <>
      <div id="title" className="d-flex">
        <div className="col-md-6 col-lg-6 row">
          <div className="">
            <span>
              FIRST
              <br />
              FOOD
            </span>
          </div>
          <img src={Logo} alt="" />
        </div>
        <div id="dish" className="col-md-2 col-lg-2">
          {newText[0]}
          <br />
          {newText[1]}
        </div>
        <div id="intro" className="col-md-4 col-lg-4 d-flex">
          <span>簡介</span>
        </div>
      </div>
    </>
  )
}

export default CarouselTitle
