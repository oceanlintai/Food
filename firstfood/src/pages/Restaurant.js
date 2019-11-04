import React, { useEffect, useState } from 'react'

import HeaderFooter from './container/HeaderFooter'

const Restaurant = props => {
  const [restaurant, setRestaurant] = useState('Restaurant')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  })
  return (
    <>
      <HeaderFooter location="市集">
        <h1>餐廳頁</h1>
      </HeaderFooter>
    </>
  )
}

export default Restaurant
