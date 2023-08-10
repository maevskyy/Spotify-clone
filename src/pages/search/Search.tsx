import style from './style.module.scss'
import Header from './widgets/header/Header'
import Main from './widgets/main/Main'

const Search = () => {
  return (
    <div className={style.page}>
        <Header/>
        <Main/>
    </div>
  )
}

export default Search