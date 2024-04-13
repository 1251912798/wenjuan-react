import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Component from './QusetionSelectBox'

test('默认属性', () => {
  render(<Component />)
  const t = screen.getByText('下拉框')
  expect(t).toBeInTheDocument()
})

test('传入属性', () => {
  const opt = [
    { value: 'item1', label: 'val1' },
    { value: 'item2', label: 'val2' },
    { value: 'item3', label: 'val3' },
  ]
  render(<Component title="下拉框" options={opt} />)
  const t = screen.getByText('下拉框')
  expect(t).toBeInTheDocument()
})
