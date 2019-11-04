import React, { useEffect, useState } from 'react'
import ChartPie from '../components/main/memberMain/memberOrder/ChartPie'
import CricleTitle from '../components/main/memberMain/CricleTitle'
import TitleLogo from '../components/main/memberMain/TitleLogo'
import TitleLogIn from '../components/smallComponents/TitleLogIn'

import HeaderFooter from './container/HeaderFooter'

const data = {
  labels: ['代客煮', '食材', '課程'],
  datasets: [
    {
      data: [300, 250, 100],
      backgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
      hoverBackgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
    },
  ],
}

const Member = props => {
  const [member, setMember] = useState('Member')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  })
  return (
    <>
      <HeaderFooter location="會員">
        <TitleLogIn />
        <TitleLogo />
        <div className="d-flex m-5">
          <CricleTitle />
          <CricleTitle />
          <CricleTitle />
          <CricleTitle />
          <CricleTitle />
          <CricleTitle />
        </div>
        <div className="row bgtest">
          <div className="col-6">
            <ChartPie />
          </div>
          <div className="col-6">
            <ChartPie />
          </div>
        </div>
      </HeaderFooter>
    </>
  )
}

export default Member
