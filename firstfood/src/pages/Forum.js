import React, { useEffect, useState } from 'react'

import HeaderFooter from './container/HeaderFooter'

const Forum = props => {
  const [forum, setForum] = useState('Forum')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  })
  return (
    <>
      <HeaderFooter location="討論區">
        <h1>討論區頁</h1>
      </HeaderFooter>
    </>
  )
}

export default Forum
