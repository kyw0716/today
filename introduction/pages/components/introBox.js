import styles from '../../styles/Home.module.css'

export default function IntroBox({subtitle, contents}){
    return(
        <div className={styles.introBox}>
          <h2 className={styles.introSubtitle}>{subtitle}</h2>
          <span className={styles.introSpan}>{contents}</span>
        </div>
    )
}