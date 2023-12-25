import { useState } from 'react'

import ListSearch from '../../../component/ListSearch'
import QuestionCard from '../../../component/QuestionCard'
import styles from '../common.module.scss'

const questionData = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: true,
    answerCount: 4,
    createTime: '3月09 日 13:11',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 18,
    createTime: '3月12日 13:11',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: true,
    answerCount: 10,
    createTime: '3月11日 13:11',
  },
  {
    id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 21,
    createTime: '3月11日 13:11',
  },
  {
    id: 'q5',
    title: '问卷5',
    isPublished: true,
    isStar: false,
    answerCount: 55,
    createTime: '3月12日 13:11',
  },
]

const List = () => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [questionList, setQuestionList] = useState(questionData)
  // 问卷搜索
  return (
    <>
      <div className={styles.header}>
        <h2>我的问卷</h2>
        <div>
          <ListSearch />
        </div>
      </div>
      <div>
        {questionList.map(item => {
          return <QuestionCard key={item.id} {...item}></QuestionCard>
        })}
      </div>
      <div className={styles.footer}>Footer</div>
    </>
  )
}

export default List
