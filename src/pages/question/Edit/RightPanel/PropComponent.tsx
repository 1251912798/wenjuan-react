import useLoadComponentList from '@/hooks/useLoadComponentList'
import React from 'react'
import { getComponentType } from '@/component/QuestionComponents/index'
const NoProp = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

const PropComponent = () => {
  const { selectComponent } = useLoadComponentList()
  if (!selectComponent) return <NoProp />

  const { type, props } = selectComponent
  const ComponentConf = getComponentType(type)
  if (!ComponentConf) return <NoProp />

  const { PropsComponent } = ComponentConf

  return <PropsComponent {...props}></PropsComponent>
}

export default PropComponent
