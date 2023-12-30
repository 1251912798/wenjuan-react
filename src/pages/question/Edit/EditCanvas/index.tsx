import { Spin } from 'antd'
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

  const { componentList } = useLoadComponentList()

  if (loading) {
    return (
      <div className={styles.loading}>
        <Spin></Spin>
      </div>
    )
  }

  return (
    <>
      {componentList.map(item => {
        return (
          <div key={item.fe_id} className={styles['component-box']}>
            <div className={styles.component}>{getCompnent(item)}</div>
          </div>
        )
      })}
    </>
  )
}

export default index
