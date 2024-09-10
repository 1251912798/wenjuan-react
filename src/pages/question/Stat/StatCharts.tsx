import React, { useEffect, useState } from 'react'
import { Typography } from 'antd'

import { getStatDatasApi } from '@/api/stat'
import { useRequest } from 'ahooks'
import { useParams } from 'react-router-dom'
import { getComponentType } from '@/component/QuestionComponents/index'
import useLoadComponentList from '@/hooks/useLoadComponentList'

type PropsType = {
  statSelectId: string
  selectComponentType: string
}

const { Title } = Typography

const StatCharts = (props: PropsType) => {
  const { componentList = [] } = useLoadComponentList()
  const { statSelectId, selectComponentType } = props
  const { id = '' } = useParams()

  const [stat, setStat] = useState([])

  const { run } = useRequest(
    async (qusetionId, componentId) => {
      const res = (await getStatDatasApi(qusetionId, componentId)) as any
      return res.stat
    },
    {
      manual: true,
      onSuccess(res) {
        setStat(res)
      },
    }
  )

  useEffect(() => {
    const com = componentList.find(item => item.fe_id === statSelectId)
    if (
      com?.type === 'questionSelectBox' ||
      com?.type === 'questionRadio' ||
      com?.type === 'questionCheckbox'
    ) {
      if (statSelectId) run(id, statSelectId)
    }
  }, [id, statSelectId])

  // 生成统计图表
  const generateChart = () => {
    if (!statSelectId) return <div>未选中组件</div>
    const { StatComponent } = getComponentType(selectComponentType) || {}
    if (StatComponent == null || !stat.length) return <div>此组件无统计图表</div>
    return <StatComponent stat={stat} />
  }

  return (
    <>
      <Title level={3}>图标统计</Title>
      <div>{generateChart()}</div>
    </>
  )
}

export default StatCharts
