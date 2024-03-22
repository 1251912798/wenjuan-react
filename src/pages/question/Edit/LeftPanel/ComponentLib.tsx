import { Typography } from 'antd'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { addComponent } from '@/store/componentSlice'
import { componentGroup } from '@/component/QuestionComponents/index'
import styles from './componentLib.module.scss'

const { Title } = Typography
import type { ComponentConfigType } from '@/component/QuestionComponents/index'
import { useCallback } from 'react'

const ComponentLib = () => {
  const dispatch = useDispatch()
  // 添加组件

  // 渲染组件列表
  const renderComponent = (item: ComponentConfigType[]) => {
    return item.map((item, index) => {
      const { defaultProps, Component, title, type, defaultProps: props } = item

      const handleClick = useCallback(() => {
        dispatch(
          addComponent({ fe_id: nanoid(), isHeid: false, isLock: false, title, type, props })
        )
      }, [])
      return (
        <div
          className={styles.context}
          style={{ marginTop: index === 0 ? '' : '10px' }}
          onClick={handleClick}
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
