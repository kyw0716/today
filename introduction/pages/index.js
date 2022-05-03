import styles from '../styles/Home.module.css'
import './components/introBox'
import IntroBox from './components/introBox'

export default function Home() {
  return (
    <div className={styles.main}>
      <header className={styles.title}>
        INTRODUCTION
      </header>
      <section className={styles.introSection}>
        <IntroBox subtitle={"이름"} contents={"김영우"}/>
        <IntroBox subtitle={"나이"} contents={"24"}/>
        <IntroBox subtitle={"사는곳"} contents={"인천"}/>
        <IntroBox subtitle={"각오"} contents={"앞으로 열심히 하겠습니다!"}/>
      </section>
    </div>
  )
}
