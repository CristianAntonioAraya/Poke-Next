export interface OptimizedData { 
    pokemon: {
        name : string,
        id: string,
        sprites: {
            front_default: string,
            back_default: string,
            front_shiny: string,
            back_shiny: string,
            main_sprite: string
        },
        poke_types: [ { slot: number, type: { name: string, url: string } } ]
            
    } 
}