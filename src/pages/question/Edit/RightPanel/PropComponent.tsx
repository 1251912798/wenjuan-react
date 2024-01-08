import { useDispatch } from 'react-redux'
import useLoadComponentList from '@/hooks/useLoadComponentList'
import { getComponentType } from '@/component/QuestionComponents/index'
import { updatedComponentProps } from '@/store/componentSlice'
import { CommentPropsType } from '@/component/QuestionComponents/index'
const NoProp = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

const PropComponent = () => {
  const dispatch = useDispatch()
  const { selectComponent } = useLoadComponentList()
  if (!selectComponent) return <NoProp />

  const { type, props, isLock } = selectComponent
  const ComponentConf = getComponentType(type)
  if (!ComponentConf) return <NoProp />

  const { PropsComponent } = ComponentConf

  const onChangeProps = (newProps: CommentPropsType) => {
    if (!selectComponent) return
    const { fe_id } = selectComponent
    dispatch(updatedComponentProps({ fe_id, newProps }))
  }

  return <PropsComponent {...props} onChange={onChangeProps} disabled={isLock} />
}

export default PropComponent
