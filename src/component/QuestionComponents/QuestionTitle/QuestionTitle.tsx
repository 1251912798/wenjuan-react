import { Typography } from 'antd'
import { TITLE_DEFAULT_PROPS } from './title'

import type { TitlePropsType } from './title'

const { Title } = Typography

const fontLevel: { [key: string]: string } = {
  '1': '24px',
  '2': '20px',
  '3': '16px',
  DEFAULT: '16px',
}

const QuestionTitle = (props: TitlePropsType) => {
  const { title = '', level = 1, isCenter = false } = { ...TITLE_DEFAULT_PROPS, ...props }
  console.log(TITLE_DEFAULT_PROPS)

  return (
    <Title
      style={{
        marginBottom: '0',
        textAlign: isCenter ? 'center' : 'start',
        fontSize: fontLevel[level],
      }}
      level={level}
    >
      {title}
    </Title>
  )
}

export default QuestionTitle
