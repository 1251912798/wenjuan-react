import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Component from './QuestionParagraph'

test('默认属性', () => {
  render(<Component />)
  const h = screen.getByText('一行段落')
  expect(h).toBeInTheDocument()
})

test('传入属性', () => {
  render(<Component text="我不知道说什么" isCenter={true} />)
  const h = screen.getByText('我不知道说什么')
  expect(h).toBeInTheDocument()

  const p = h.parentElement
  expect(p).not.toBeNull()
  const pp = p!.style
  expect(pp.textAlign).toBe('center')
})

test('多行', () => {
  render(<Component text={'a\nb\nc'} />)

  const t = screen.getByText('a')
  expect(t).toBeInTheDocument()
  expect(t).toHaveTextContent('a')
  expect(t).not.toHaveTextContent('ab')
})
