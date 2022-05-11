export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  SinglePokemonResponse[];
}

export interface SinglePokemonResponse {
    name: string;
    url:  string;
    img: string;
    id: string;
}
