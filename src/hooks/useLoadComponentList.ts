import { useSelector } from 'react-redux'
import { StateType } from '@/store/index'
import { ComponentStateType } from '@/store/componentSlice'

const useLoadComponentList = () => {
  const components = useSelector<StateType>(state => state.components) as ComponentStateType

  const { componentList = [], selectId = '' } = components
  return { componentList, selectId }
}

export default useLoadComponentList
