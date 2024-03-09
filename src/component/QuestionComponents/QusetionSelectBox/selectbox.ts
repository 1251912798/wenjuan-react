export type optionsType = {
  label: string
  value: string
}

export type SelectBoxPropsType = {
  title?: string
  options?: optionsType[]
  defaultValue?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (newProps: SelectBoxPropsType) => void
  disabled?: boolean
}

export const SELECTIONBOX_DEFAULT_PROPS: SelectBoxPropsType = {
  title: '下拉框',
  options: [
    { value: 'item1', label: '苹果' },
    { value: 'item2', label: '香蕉' },
    { value: 'item3', label: '番茄' },
  ],
  defaultValue: '',
}

export type QuseitonSelectStatChartPropsType = {
  stat: Array<{ name: string; count: number }>
}
