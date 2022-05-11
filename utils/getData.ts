import axios from "axios"
import { PokemonListResponse } from "../interfaces/PokemonInterfaces"
import { SinglePokemonInfo } from "../interfaces/SinglePokemonInterface"

const BASE_URL = 'https://pokeapi.co/api/v2'

export const getAllPokemons = async ( request: string ) => {
    const { data } = await axios.get<PokemonListResponse>(`${BASE_URL}/${ request }`)
    return data;
}

export const getSinglePokemon = async ( request: string ) => {
    const {data} = await axios.get<SinglePokemonInfo>( `${BASE_URL}${request}`)
    const pokemon = { 
        name : data.name,
        sprites : { 
            front_default: data.sprites.front_default,
            back_default: data.sprites.back_default,
            front_shiny: data.sprites.front_shiny,
            back_shiny: data.sprites.back_shiny,
            main_sprite: data.sprites.other?.dream_world.front_default 
        },
        types : data.types
    }
    return pokemon;
}