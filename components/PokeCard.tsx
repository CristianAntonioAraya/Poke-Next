import { FC } from 'react'
import styles from '../styles/poke__card.module.scss'
import { useRouter } from 'next/router'

type Props = {
  name: string;
  img: string;
  id: string;
}



const PokeCard: FC<Props> = ( { name , img, id  }) => {
  
  const pokeName = name[0].toUpperCase() + name.slice(1);

  const router = useRouter();
  
  const handleOnClick = () => {
      router.push(`/pokemon/${ pokeName }`)
  }

  return (
    <div className={ styles.container } onClick={ handleOnClick }>
      <div className={styles.content }>
        <p className={ styles.id }>#{ id }</p>
        <img className={ styles.img } src={ img } />
        <p className={ styles.name }>{ pokeName }</p>
      </div>
    </div>
  )
}

export default PokeCard