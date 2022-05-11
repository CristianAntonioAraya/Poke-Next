import axios from "axios"
import { PokemonListResponse } from "../interfaces/PokemonInterfaces"
import { SinglePokemonInfo } from "../interfaces/SinglePokemonInterface"

const BASE_URL = 'https://pokeapi.co/api/v2'

export const getAllPokemons = async ( request: string ) => {
    const { data } = await axios.get<PokemonListResponse>(`${BASE_URL}/${ request }`)
    return data;
}

export const getSinglePokemon = async ( request: string ) => {


    const {data} = await axios.get<SinglePokemonInfo>( `${BASE_URL}/pokemon/${request}`)

    const poke_name = data.name[0].toUpperCase() + data.name.slice(1)
    const poke_id = `${ data.id }`
    
    console.log(`${BASE_URL}/pokemon/${request}`)

    const pokemon = { 
        name : poke_name,
        id: poke_id,
        sprites : { 
            front_default: data.sprites.front_default,
            back_default: data.sprites.back_default,
            front_shiny: data.sprites.front_shiny,
            back_shiny: data.sprites.back_shiny,
            main_sprite: data.sprites.other?.dream_world.front_default 
        },
        poke_types : data.types
    }
    return pokemon;
}

export const getPokemonsName = async ( request: string ) => { 
    const {data} = await axios.get<PokemonListResponse>( `${BASE_URL}/pokemon?limit=${ request }`)
    const pokemonsNames: string[] = data.results.map( poke => poke.name[0].toUpperCase() + poke.name.slice(1) )

    return pokemonsNames;
}