export type optionsType = {
  label: string
  value: string
  checked: boolean
}

export type CheckboxPropsType = {
  title?: string
  isColumn?: boolean
  list?: optionsType[]
  // eslint-disable-next-line no-unused-vars
  onChange?: (newProps: CheckboxPropsType) => void
  disabled?: boolean
}

export const CHECKBOX_DEFAULT_PROPS: CheckboxPropsType = {
  title: '多选标题',
  isColumn: false,
  list: [
    { value: 'item1', label: '选项1', checked: false },
    { value: 'item2', label: '选项2', checked: false },
    { value: 'item3', label: '选项3', checked: false },
  ],
}
