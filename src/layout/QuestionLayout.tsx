import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'

import useLoadUserInfo from '@/hooks/useLoadUserInfo'
import useNavPage from '@/hooks/useNavPage'

const QuestionLayout = () => {
  const { isLogin } = useLoadUserInfo()
  useNavPage(isLogin)

  return (
    <div style={{ height: '100vh' }}>
      {isLogin ? (
        <div style={{ textAlign: 'center', marginTop: '300px' }}>
          <Spin />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default QuestionLayout
