import type { MouseEvent } from 'react'
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'

import SortContaniner from '@/component/DragSort/SortContaniner'
import SortItem from '@/component/DragSort/SortItem'
import { getComponentType } from '@/component/QuestionComponents/index'
import { onSelectId, dragSorter } from '@/store/componentSlice'
import useLoadComponentList from '@/hooks/useLoadComponentList'
import useCanvasShoortKeys from '@/hooks/useCanvasShortcutKeys'

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
  const { componentList = [], selectId } = useLoadComponentList()

  // 组件选择
  const onselectId = (event: MouseEvent, id: string) => {
    event.stopPropagation()
    dispatch(onSelectId(id))
  }
  useCanvasShoortKeys()
  if (loading) {
    return (
      <div className={styles.loading}>
        <Spin></Spin>
      </div>
    )
  }

  // 组件列表添加id
  const componentListMap = componentList.map(item => {
    return { ...item, id: item.fe_id }
  })

  // 拖拽结束
  const onDragEnd = (oldIndex: number, newIndex: number) => {
    dispatch(dragSorter({ oldIndex, newIndex }))
  }

  return (
    <SortContaniner items={componentListMap} onDragEnd={onDragEnd}>
      {componentList
        .filter(q => !q.isHeid)
        .map(item => {
          const { fe_id } = item
          const wrap = styles['component-box']
          const active = styles['active-component']
          const isLocks = styles['isLocking']
          const componentStyle = classnames({
            [wrap]: true,
            [active]: selectId === item.fe_id,
            [isLocks]: item.isLock,
          })
          return (
            <SortItem key={fe_id} id={fe_id}>
              <div onClick={event => onselectId(event, fe_id)} className={componentStyle}>
                <div className={styles.component}>{getCompnent(item)}</div>
              </div>
            </SortItem>
          )
        })}
    </SortContaniner>
  )
}

export default index
