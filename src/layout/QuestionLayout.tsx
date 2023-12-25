import React from 'react'
import { Outlet } from 'react-router-dom'
const QuestionLayout = () => {
  return (
    <>
      <h1>QuestionLayout</h1>
      <Outlet></Outlet>
    </>
  )
}

export default QuestionLayout
