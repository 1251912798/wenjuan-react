import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Component from './QuestionInput'

test('默认属性', () => {
  render(<Component />)
  const t = screen.getByText('输入框')
  const p = screen.getByPlaceholderText('请输入...')
  expect(t).toBeInTheDocument()
  expect(p).toBeInTheDocument()
})

test('传入属性', () => {
  render(<Component title="姓名" placeholder="请输入姓名" />)

  const t = screen.getByText('姓名')
  const p = screen.getByPlaceholderText('请输入姓名')
  expect(t).toBeInTheDocument()
  expect(p).toBeInTheDocument()
})
