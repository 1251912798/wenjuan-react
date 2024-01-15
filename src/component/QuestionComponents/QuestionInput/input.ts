export type InputPropsType = {
  title?: string
  placeholder?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (newProps: InputPropsType) => void
  disabled?: boolean
}

export const INPUT_DEFAULT_PROPS: InputPropsType = {
  title: '输入框',
  placeholder: '请输入...',
}
