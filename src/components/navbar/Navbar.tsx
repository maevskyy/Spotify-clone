import HomeAndSearch from "./modules/homeAndSearch/HomeAndSearch"
import Library from "./modules/library/Library"
import styles from './style.module.scss'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
        <HomeAndSearch/>
        <Library/>
    </nav>
  )
}

export default Navbar