import { createBrowserRouter } from 'react-router-dom'
import List from '../pages/manage/List'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Edit from '../pages/question/Edit'
import Star from '../pages/manage/Star'
import Trash from '../pages/manage/Trash'
import Stat from '../pages/question/Stat'
import Register from '../pages/Register'
import Error404 from '../pages/Error404'
import MainLayout from '../layout/MainLayout'
import MenuLayout from '../layout/MenuLayout'
import QuestionLayout from '../layout/QuestionLayout'

Register
List
Home
Login
Edit
Star
Trash
Stat

MenuLayout
QuestionLayout

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
