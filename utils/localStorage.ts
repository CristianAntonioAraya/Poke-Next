
// export const isInLocalStorage = ( name: string ) => {
//     const isFav = JSON.parse( localStorage.getItem('favorites') || '[]');
//     if( isFav?.includes(name)){ return true }
//     else { return false }
    
// }

// export const toggleFav = ( name:string ) => {

//     let newFavorites:string[]  = JSON.parse( localStorage.getItem('favorites') || '[]');
//     if( isInLocalStorage(name)) {
//         newFavorites = newFavorites.filter( pokeName => pokeName !== name )
//     }
//     else{
//         newFavorites.push( name )
//     }

//     localStorage.setItem('favorites', JSON.stringify( newFavorites ))
// }

// export const localFavorites = () => {
//     return JSON.parse( localStorage.getItem('favorites') || '[]');
// }


 export const isInLocalStorage = ( name: string ) => {

    const isFav = JSON.parse( localStorage.getItem('favorites') || '[]');

    let found = isFav.find( (poke:{ name: string }) => poke.name === name)

    if(found){ return true }

    else { return false }
    
}

export const toggleFav = ( name:string, id: string, img: string  ) => {

    let Favorites:[{ id: string, name: string, img: string}]  = JSON.parse( localStorage.getItem('favorites') || '[]');

    const poke = { id, name, img }

    if( isInLocalStorage(name)) {
       const newFavs = Favorites.filter( poke => poke.id !== id)
       localStorage.setItem('favorites', JSON.stringify( newFavs ))
    }
    else{
        Favorites.push( poke )
        localStorage.setItem('favorites', JSON.stringify( Favorites ))
    }

}

export const localFavorites = () => {
    return JSON.parse( localStorage.getItem('favorites') || '[]');
}