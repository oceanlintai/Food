import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

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

const ChartPie = props => {
  const [chartPie, setChartPie] = useState('ChartPie')

  return (
    <>
      <div>
        <h2>購買比例</h2>
        <Doughnut data={data} />
      </div>
    </>
  )
}

export default ChartPie
