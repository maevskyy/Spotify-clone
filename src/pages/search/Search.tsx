import Header from './models/header/Header'
import Main from './models/main/Main'

type Props = {}

const Search = (props: Props) => {
  return (
    <main className="main" >
        <Header/>
        <Main/>
    </main>
  )
}

export default Search