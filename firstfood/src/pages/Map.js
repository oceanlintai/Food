import React, { useEffect, useState } from 'react'

import HeaderFooter from './container/HeaderFooter'

const RestaurantMap = props => {
  const [map, setMap] = useState('Map')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  })
  return (
    <>
      <HeaderFooter location="美食地圖">
        <h1>美食地圖頁</h1>
      </HeaderFooter>
    </>
  )
}

export default RestaurantMap
