import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Component from './QuestionTextarea'

test('默认属性', () => {
  render(<Component />)
  const h = screen.getByText('多行输入框')
  const p = screen.getByPlaceholderText('请输入...')
  expect(h).toBeInTheDocument()
  expect(p).toBeInTheDocument()
})

test('传入', () => {
  render(<Component title="标题" placeholder="请输入姓名" />)

  const t = screen.getByText('标题')
  const p = screen.getByPlaceholderText('请输入姓名')
  expect(t).toBeInTheDocument()
  expect(p).toBeInTheDocument()
})
