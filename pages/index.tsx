import { GetStaticProps, NextPage } from 'next';

import { SinglePokemonResponse } from '../interfaces/PokemonInterfaces';

import PokeCard from '../components/PokeCard';
import MainLayout from '../layout/MainLayout';
import { getAllPokemons } from '../utils/getData';

import styles from '../styles/home.module.scss';

type Props = {
  pokemons: SinglePokemonResponse[]
}

const Home:NextPage<Props> = ( { pokemons }) => {
  
  return (

    <MainLayout title='Home'>

      <div className={ styles.container }>
        {
          pokemons.map( poke => (
            <PokeCard key={poke.id} name={ poke.name} id={poke.id} img={ poke.img } />
          ))
        }
      </div>

    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ( ctx ) =>{

  const { results } = await getAllPokemons('/pokemon?limit=900')

  const pokemons = results.map( ( poke, index ) => (
    {
      ...poke,
      id: `${index + 1}`,
      img: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`
    }
  ))

  return {
    props: {
      pokemons
    }
  }
}


export default Home