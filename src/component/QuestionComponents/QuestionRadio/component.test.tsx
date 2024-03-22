import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Component from './QuestionRadio'

test('默认属性', () => {
  render(<Component />)
  const title = screen.getByText('单选框')
  expect(title).toBeInTheDocument()

  for (let i = 1; i <= 3; i++) {
    const v = screen.getByDisplayValue(`item${i}`)
    expect(v).toBeInTheDocument()
    const lable = screen.getByLabelText(`选项${i}`)
    expect(lable).toBeInTheDocument()
  }
})

test('传入属性', () => {
  const opt = [
    { value: 'val1', label: '苹果' },
    { value: 'val2', label: '李子' },
    { value: 'val3', label: '香蕉' },
  ]
  const val22 = 'val1'

  render(<Component title="技术栈" isColumn={true} options={opt} value={val22} />)
  const title = screen.getByText('技术栈')
  expect(title).toBeInTheDocument()

  for (let i = 1; i <= opt.length; i++) {
    const curVal = `val${i}`
    const v = screen.getByDisplayValue(curVal)
    expect(v).toBeInTheDocument()
    const lable = screen.getByLabelText(`${opt[i - 1].label}`)
    expect(lable).toBeInTheDocument()
    if (curVal === val22) {
      expect(v.getAttribute('checked')).not.toBeNull()
    }
  }
})
