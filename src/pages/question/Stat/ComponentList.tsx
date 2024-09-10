/* eslint-disable no-unused-vars */
import classnames from 'classnames'

import useLoadComponentList from '@/hooks/useLoadComponentList'
import { getComponentType } from '@/component/QuestionComponents/index'

import styles from './componentList.module.scss'

import type { CommentInfoType } from '@/store/componentSlice'

// 获取type对应的组件
const getCompnent = (item: CommentInfoType) => {
  const { type, props } = item

  const componentConf = getComponentType(type)
  if (!componentConf) return null
  const { Component } = componentConf

  return <Component {...props} />
}
type PropsTyps = {
  statSelectId: string
  setStatSelectId: (id: string) => void
  setSelectComponentType: (type: string) => void
}

const ComponentList = (props: PropsTyps) => {
  const { statSelectId, setStatSelectId, setSelectComponentType } = props
  const { componentList = [] } = useLoadComponentList()

  return (
    <div>
      {componentList
        .filter(item => !item.isHeid)
        .map(item => {
          const { fe_id, type } = item
          const wrap = styles['component-box']
          const active = styles['active-component']
          const componentStyle = classnames({
            [wrap]: true,
            [active]: statSelectId === fe_id,
          })

          return (
            <div
              key={fe_id}
              className={componentStyle}
              onClick={() => {
                setStatSelectId(fe_id)
                setSelectComponentType(type)
              }}
            >
              <div className={styles.component}>{getCompnent(item)}</div>
            </div>
          )
        })}
    </div>
  )
}

export default ComponentList
