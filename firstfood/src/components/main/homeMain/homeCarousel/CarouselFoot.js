import React from 'react'

const CarouselFoot = props => {
  const { status } = props
  const circle = []
  const amount = 5
  for (let i = 0; i < amount; i++) {
    if (i === status) {
      circle.push(
        <div
          onClick={() => props.handleClick(i)}
          key={i}
          className="circle active"
        ></div>
      )
    } else {
      circle.push(
        <div
          onClick={() => props.handleClick(i)}
          key={i}
          className="circle"
        ></div>
      )
    }
  }
  return (
    <>
      <div id="carouselFoot" className="row align-content-center">
        <h3 className="align-self-center">Recommend</h3>
        <div className="col-md-3 col-lg-2 text-center align-self-center">
          <span>
            recommend
            <br />
            items
          </span>
        </div>

        <div id="circle" className="row align-content-center">
          {circle}
        </div>
      </div>
    </>
  )
}

export default CarouselFoot
