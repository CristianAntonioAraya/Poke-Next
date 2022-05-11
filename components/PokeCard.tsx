import { FC } from 'react'
import styles from '../styles/poke__card.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image';

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
        <Image className={ styles.img } src={ img } alt={name} width={160} height={160}/>
        <p className={ styles.name }>{ pokeName }</p>
      </div>
    </div>
  )
}

export default PokeCard