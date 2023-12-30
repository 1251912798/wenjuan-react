import { useSelector } from 'react-redux'
import { StateType } from '@/store/index'
import { ComponentStateType } from '@/store/componentSlice'

const useLoadComponentList = () => {
  const components = useSelector<StateType>(state => state.components) as ComponentStateType
  const { componentList = [] } = components
  return { componentList }
}

export default useLoadComponentList
