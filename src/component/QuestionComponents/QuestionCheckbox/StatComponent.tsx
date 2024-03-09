import React, { FC } from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import type { QuseitonCheckboxStatChartPropsType } from './checkbox'

const StatComponent: FC<QuseitonCheckboxStatChartPropsType> = ({ stat = [] }) => {
  return (
    <div style={{ width: '300px', height: '250px', margin: '20px auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={stat}>
          <XAxis dataKey="name" />
          <YAxis width={40} style={{ fontSize: '10px' }} />
          <Tooltip />
          <Legend />
          <Bar
            name={'数量'}
            dataKey="count"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StatComponent
