import { Typography } from 'antd'

import { INFO_DEFAULT_PROPS } from './info'

import type { InfoPropsType } from './info'

const { Title, Paragraph } = Typography

const QuestionInfo = (props: InfoPropsType) => {
  const { title = '问卷标题', text = '问卷描述...' } = { ...INFO_DEFAULT_PROPS, ...props }

  const textList = text.split('\n')
  return (
    <div style={{ height: '100%', textAlign: 'center' }}>
      <Title level={1} style={{ fontSize: '24px' }}>
        {title}
      </Title>
      <Paragraph style={{ marginBottom: '0' }}>
        {textList.map((item, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {item}
          </span>
        ))}
      </Paragraph>
    </div>
  )
}

export default QuestionInfo
