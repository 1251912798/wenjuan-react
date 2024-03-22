import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import List from '../pages/manage/List'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Trash from '../pages/manage/Trash'
import Star from '../pages/manage/Star'
import Register from '../pages/Register'
import Error404 from '../pages/Error404'
import MainLayout from '../layout/MainLayout'
import MenuLayout from '../layout/MenuLayout'
import QuestionLayout from '../layout/QuestionLayout'

const Edit = lazy(/* webpackChunkName: "Edit" */ () => import('../pages/question/Edit'))
const Stat = lazy(/* webpackChunkName: "Stat" */ () => import('../pages/question/Stat'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <MenuLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
])

export default router

export const HOME_PATH = '/'
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const MANAGE_INDEX_PATH = '/manage/list'

// 判断是否在登录页或者注册页
export const isLoginResgiterPage = (path: string) => {
  return [LOGIN_PATH, REGISTER_PATH].includes(path)
}

// 判断未登录是否在管理页
export const isNoLoginManagePage = (path: string) => {
  return [HOME_PATH, LOGIN_PATH, REGISTER_PATH].includes(path)
}
