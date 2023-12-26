import { Spin } from 'antd'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
const Edit = () => {
  const { loading, data } = useLoadQuestionData()

  return <>{loading ? <Spin /> : <p>{JSON.stringify(data)}</p>}</>
}

export default Edit
