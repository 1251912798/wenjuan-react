export type TextareaPropsType = {
  title?: string
  placeholder?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (newProps: TextareaPropsType) => void
  disabled?: boolean
}

export const TEXTAREA_DEFAULT_PROPS: TextareaPropsType = {
  title: '多行输入框',
  placeholder: '请输入...',
}
