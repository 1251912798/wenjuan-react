import QuestionInput from '@/component/QuestionComponents/QuestionInput/QuestionInput'
import QuestionTitle from '@/component/QuestionComponents/QuestionTitle/QuestionTitle'

import styles from './EditCanvas.module.scss'
const index = () => {
  return (
    <div className={styles.canvas_box}>
      <div className={styles['component-box']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
      <div className={styles['component-box']}>
        <div className={styles.component}>
          <QuestionTitle></QuestionTitle>
        </div>
      </div>
    </div>
  )
}

export default index
