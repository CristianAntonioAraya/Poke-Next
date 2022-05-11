export interface OptimizedData { 
    pokemon: {
        name : string,
        sprites: {
            front_default: string,
            back_default: string,
            front_shiny: string,
            back_shiny: string,
            main_sprite: string
        },
        types: [ string ]
    }
    
}