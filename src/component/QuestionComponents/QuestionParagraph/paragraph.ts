export type ParagraphPropsType = {
  title?: string
  text?: string
  isCenter?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (newProps: ParagraphPropsType) => void
  disabled?: boolean
}

export const PARAGRAPH_DEFAULT_PROPS: ParagraphPropsType = {
  text: '一行段落',
  isCenter: false,
}
