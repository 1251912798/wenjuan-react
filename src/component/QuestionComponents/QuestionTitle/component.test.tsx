import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Component from './QuestionTitle'

test('默认属性', () => {
  render(<Component />)
  const h = screen.getByText('标题')
  expect(h).toBeInTheDocument()
})

test('传入属性', () => {
  render(<Component title="标题啊" level={3} isCenter={true} />)

  const t = screen.getByText('标题啊')
  expect(t).toBeInTheDocument()

  expect(t.matches('h3')).toBeTruthy()

  const style = t.style

  expect(style.textAlign).toBe('center')
})
