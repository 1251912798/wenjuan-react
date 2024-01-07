import type { MouseEvent } from 'react'
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import { onSelectId } from '@/store/componentSlice'
import classnames from 'classnames'
import useLoadComponentList from '@/hooks/useLoadComponentList'
import { getComponentType } from '@/component/QuestionComponents/index'
import styles from './EditCanvas.module.scss'
import type { CommentInfoType } from '@/store/componentSlice'

// 获取type对应的组件
const getCompnent = (item: CommentInfoType) => {
  const { type, props } = item
  const componentConf = getComponentType(type)
  if (!componentConf) return null
  const { Component } = componentConf
  return <Component {...props} />
}

const index = (props: { loading: boolean }) => {
  const { loading } = props
  const dispatch = useDispatch()
  const { componentList, selectId } = useLoadComponentList()

  // 组件选择
  const onselectId = (event: MouseEvent, id: string) => {
    event.stopPropagation()
    dispatch(onSelectId(id))
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <Spin></Spin>
      </div>
    )
  }

  return (
    <>
      {componentList
        .filter(q => !q.isHeid)
        .map(item => {
          const wrap = styles['component-box']
          const active = styles['active-component']
          const componentStyle = classnames({ [wrap]: true, [active]: selectId === item.fe_id })
          return (
            <div
              onClick={event => onselectId(event, item.fe_id)}
              key={item.fe_id}
              className={componentStyle}
            >
              <div className={styles.component}>{getCompnent(item)}</div>
            </div>
          )
        })}
    </>
  )
}

export default index
