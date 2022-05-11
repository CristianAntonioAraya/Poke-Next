import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from '../styles/navbar.module.scss'

const Navbar: FC = () => {

  const router = useRouter()

  const handleOnClickFavorites = () => {
    router.push('/favorites')
  }
  const handleOnClickHome = () => {
    router.push('/')
  }

  return (
    <nav className={ styles.container }> 
      <p className={ styles.title } onClick={ handleOnClickHome }>POKE-NEXT</p>
      <p className={ styles.favorites } onClick={ handleOnClickFavorites }>Favorites</p>
    </nav>
  )
}

export default Navbar