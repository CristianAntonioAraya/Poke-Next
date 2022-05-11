import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import MainLayout from "../../layout/MainLayout";
import { getSinglePokemon } from "../../utils/getData";

import styles from '../../styles/poke_id.module.scss';
import { OptimizedData } from "../../interfaces/OptimizedPokemonData";

const pokePage: NextPage<OptimizedData> = ( { pokemon }) => {
  return (
    <MainLayout title="pokePage">
        <div className={ styles.container }>
            <img src={ pokemon.sprites.main_sprite }/>
        </div>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const allPokemons = [ ...Array(151) ].map( ( value, index ) => ( `${ index + 1 }` ))

    return {
        paths: allPokemons.map( id => ( {
            params: { id }
        })),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ( ctx ) => {

    const { id } = ctx.params as { id: string } 

    const pokemon  = await getSinglePokemon( `/pokemon/${ id } `)

    return {
        props: {
            pokemon
        }
    }
}


export default pokePage