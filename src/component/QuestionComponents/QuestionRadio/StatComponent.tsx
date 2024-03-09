import React, { FC } from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts'

import type { QuseitonRadioStatChartPropsType } from './radio'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const StatComponent: FC<QuseitonRadioStatChartPropsType> = ({ stat = [] }) => {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={300}>
          <Pie dataKey="count" data={stat} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label>
            {stat.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StatComponent
