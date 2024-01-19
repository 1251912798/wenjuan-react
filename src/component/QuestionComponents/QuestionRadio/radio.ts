export type optionsType = {
  label: string
  value: string
}

export type RadioPropsType = {
  title?: string
  isColumn?: boolean
  value?: string
  options?: optionsType[]
  // eslint-disable-next-line no-unused-vars
  onChange?: (newProps: RadioPropsType) => void
  disabled?: boolean
}

export const RADIO_DEFAULT_PROPS: RadioPropsType = {
  title: '单选标题',
  isColumn: false,
  options: [
    { value: 'item1', label: '选项1' },
    { value: 'item2', label: '选项2' },
    { value: 'item3', label: '选项3' },
  ],
  value: '',
}
