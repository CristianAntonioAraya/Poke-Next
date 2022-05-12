import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { OptimizedData } from "../../interfaces/OptimizedPokemonData";
import MainLayout from "../../layout/MainLayout";
import styles from '../../styles/poke_id.module.scss';

import { getPokemonsName, getSinglePokemon } from "../../utils/getData"
import { isInLocalStorage, toggleFav } from "../../utils/localStorage";
import Image from "next/image";

const PokeNamePage: NextPage<OptimizedData> = ( { pokemon }) => {

    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        setIsFav(isInLocalStorage( pokemon.id ))
    }, [])
    
    const handleToggleFavorite = () => {
        setIsFav( !isFav )
        toggleFav( pokemon.name, pokemon.id, pokemon.sprites.main_sprite )
    }

    return (
        <MainLayout title="pokePage">
            <div className={ styles.container }>
                <Image className={ styles.image } src={ pokemon.sprites.main_sprite } alt={pokemon.name} width={400} height={400}/>
                <div className={ styles.info__container}>
                    <div className={styles.info__content}>
                        <div>
                            <p className={ styles.name }>{pokemon.name}</p>
                            <div className={ styles.types }>
                                {
                                    pokemon.poke_types.map( ( item, index ) => (
                                        <p key={index} className={styles.type_item}>{item.type.name}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <button className={ isFav ? styles.isfav__btn : styles.nofav__btn  } onClick={ handleToggleFavorite }>
                            { isFav ? <p> Favorite ❤️</p> : <p> Set Favorite ⭐</p> }
                        </button>
                    </div>
                    <div className={ styles.sprites }>
                        <Image width={400} height={400} className={ styles.single__sprite} src={pokemon.sprites.front_default} alt="front_default"/>
                        <Image width={400} height={400} className={ styles.single__sprite} src={pokemon.sprites.back_default} alt="back_default"/>
                        <Image width={400} height={400} className={ styles.single__sprite} src={pokemon.sprites.front_shiny} alt="front_shiny"/>
                        <Image width={400} height={400} className={ styles.single__sprite} src={pokemon.sprites.back_shiny} alt="back_shiny"/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const pokemonList = await getPokemonsName( '151')

    return {
        paths: pokemonList.map( name => ({
            params: { name }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps:GetStaticProps = async ( ctx ) => {

    const { name } = ctx.params as { name: string }

    const poke_name = name[0].toLowerCase() + name.slice(1)

    const pokemon  = await getSinglePokemon( `${ poke_name } `)

    if( !pokemon ) {
        return { 
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400,
    }
}


export default PokeNamePage