import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Component from './QuestionInfo'

test('默认属性', () => {
  render(<Component />)
  // 获取文本为问卷标题 的元素
  const h = screen.getByText('问卷标题')
  // 验证这个元素是否存在与文档
  expect(h).toBeInTheDocument()
})

test('传入组件属性', () => {
  render(<Component title="你好" text="牛逼" />)
  const t = screen.getByText('你好')
  expect(t).toBeInTheDocument()
  const t2 = screen.getByText('牛逼')
  expect(t2).toBeInTheDocument()
})

test('多行文字', () => {
  render(<Component text={'s\nb\nc'} />)
  const text = screen.getByText('s')

  expect(text).toBeInTheDocument()
  expect(text).toHaveTextContent('s')
  expect(text).not.toHaveTextContent('sb')
})
