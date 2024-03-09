import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import type { QuseitonSelectStatChartPropsType } from './selectbox'

const StatComponent = (props: QuseitonSelectStatChartPropsType) => {
  const { stat } = props
  return (
    <div style={{ width: '300px', height: '250px', margin: '20px auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={stat}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis width={35} style={{ fontSize: '12px' }} />
          <Tooltip />
          <Line name="数量" type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StatComponent
