import { Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { addComponent } from '@/store/componentSlice'
import { componentGroup } from '@/component/QuestionComponents/index'
import styles from './componentLib.module.scss'
const { Title } = Typography
import type { ComponentConfigType } from '@/component/QuestionComponents/index'

const ComponentLib = () => {
  const dispatch = useDispatch()
  // 添加组件
  const onAddComponent = (item: ComponentConfigType) => {
    const { title, type, defaultProps: props } = item
    dispatch(
      addComponent({ fe_id: +new Date() + '', isHeid: false, isLock: false, title, type, props })
    )
  }

  // 渲染组件列表
  const renderComponent = (item: ComponentConfigType[]) => {
    return item.map((item, index) => {
      const { defaultProps, Component } = item
      return (
        <div
          className={styles.context}
          style={{ marginTop: index === 0 ? '' : '10px' }}
          onClick={() => onAddComponent(item)}
          key={item.type}
        >
          <div className={styles.component}>
            <Component {...defaultProps} />
          </div>
        </div>
      )
    })
  }

  return (
    <>
      {componentGroup.map((item, index) => {
        return (
          <div key={item.groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index === 0 ? '0' : '20px' }}>
              {item.title}
            </Title>
            {renderComponent(item.componentList)}
          </div>
        )
      })}
    </>
  )
}

export default ComponentLib
