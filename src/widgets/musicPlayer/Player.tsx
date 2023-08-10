import styles from './style.module.scss'

const Player = () => {
  return (
    <section className={styles.player}>
        <div className={styles.player__left}>left</div>
        <div className={styles.player__middle}>middle</div>
        <div className={styles.player__right}>right</div>
    </section>
  )
}

export default Player