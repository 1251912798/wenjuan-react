export type InfoPropsType = {
  title?: string
  text?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (newProps: InfoPropsType) => void
  disabled?: boolean
}

export const INFO_DEFAULT_PROPS: InfoPropsType = {
  title: '问卷标题',
  text: '问卷描述...',
}
