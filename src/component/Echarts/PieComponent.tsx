import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const PieComponent = () => {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={300}>
          <Pie
            dataKey="value"
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            label
          >
            {data01.map((_, index) => (
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

export default PieComponent
