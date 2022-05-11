import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { localFavorites } from "../utils/localStorage";
import styles from '../styles/favorites.module.scss';
import PokeCard from "../components/PokeCard";



const favorites = () => {

    const [favsPokemon, setFavsPokemon] = useState<{name:string, id:string, img: string}[]>([])

    useEffect(() => {
        setFavsPokemon( localFavorites() )
    }, [])
    

  return (
    <MainLayout title="Favorites">
      <div className={ styles.content}>
          {
            favsPokemon.map( poke => (
              <PokeCard name={poke.name} id={poke.id} img={poke.img}/>
            ))
          }
      </div>
    </MainLayout>
  )
}

export default favorites