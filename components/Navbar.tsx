import { FC } from 'react'
import styles from '../styles/navbar.module.scss'

const Navbar: FC = () => {
  return (
    <nav className={ styles.container }> 
      <p className={ styles.title }>POKE-NEXT</p>
      <p className={ styles.favorites } >Favorites</p>
    </nav>
  )
}

export default Navbar