import React, { useEffect, useState } from 'react'
import {WithLoading} from '../components/HOC/withLoading'
import HeaderFooter from './container/HeaderFooter'

const Cart = props => {
  const [cart, setCart] = useState('Cart')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  })
  return (
    <>
      <HeaderFooter location="購物車">
        <h1>購物車</h1>
      </HeaderFooter>
    </>
  )
}

export default WithLoading(Cart)
