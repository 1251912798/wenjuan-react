import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Component from './QuesitonCheckbox'

test('默认属性', () => {
  render(<Component />)

  const t = screen.getByText('多选框')
  expect(t).toBeInTheDocument()

  for (let i = 1; i < 3; i++) {
    const t = screen.getByText('选项' + (i + 1))
    expect(t).toBeInTheDocument()

    const v = screen.getByDisplayValue(`item${i}`)
    expect(v).toBeInTheDocument()

    expect(v.getAttribute('checked')).toBeNull()
  }
})

test('传入属性', () => {
  const list = [
    { value: 'v1', label: 'item1', checked: false },
    { value: 'v2', label: 'item2', checked: true },
    { value: 'v3', label: 'item3', checked: true },
  ]
  render(<Component title="你好" list={list} />)

  const t = screen.getByText('你好')
  expect(t).toBeInTheDocument()

  const val1 = screen.getByDisplayValue('v1')
  expect(val1).toBeInTheDocument()
  expect(val1.getAttribute('checked')).toBeNull()

  const val2 = screen.getByDisplayValue('v2')
  expect(val2).toBeInTheDocument()
  expect(val2.getAttribute('checked')).not.toBeNull()

  const val3 = screen.getByDisplayValue('v3')
  expect(val3).toBeInTheDocument()
  expect(val3.getAttribute('checked')).not.toBeNull()
})
