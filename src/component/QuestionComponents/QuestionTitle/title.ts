export type TitlePropsType = {
  title?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean
}

export const TITLE_DEFAULT_PROPS: TitlePropsType = {
  title: '标题',
  level: 1,
  isCenter: false,
}
