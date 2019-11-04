import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import ReactCompare from 'react-compare-image'
import C1 from '../../../assets/images/compare1.jpg'
import C2 from '../../../assets/images/compare2.jpg'

const HomeCompare = props => {
  const handleChange = e => {
    if (e > 0.95) {
      props.history.push('./restaurant')
    } else if (e < 0.05) {
      props.history.push('./restaurant')
    }
  }

  return (
    <>
      <div id="compare">
        <div className="row justify-content-between">
          <h5>
            代客煮 <i className="fas fa-utensils"></i>
          </h5>
          <h5>First Food</h5>
        </div>
        <div id="titleLine"></div>
        <ReactCompare
          sliderLineColor={'#C5C5C5'}
          onSliderPositionChange={handleChange}
          leftImageLabel={'中式'}
          rightImageLabel={'西式'}
          hover={false}
          leftImage={C1}
          rightImage={C2}
        />
      </div>
    </>
  )
}

export default withRouter(HomeCompare)
