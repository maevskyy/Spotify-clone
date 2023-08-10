import style from '../../style.module.scss'

const Main = () => {
  return (
    <main className={style.page__main}>
        {Array(200).fill('privet').map(el => (
            <div className="">{el}</div>
        ))}
    </main>
  )
}

export default Main