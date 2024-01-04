export type InputPropsType = {
  title?: string
  placeholder?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (newProps: InputPropsType) => void
}

export const INPUT_DEFAULT_PROPS: InputPropsType = {
  title: '输入框标题',
  placeholder: '请输入...',
}
