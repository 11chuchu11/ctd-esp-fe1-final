import { AnyAction} from "@reduxjs/toolkit";
import { FavoriteCharacterAction, Result } from "../Helpers/types/typesAPIs";



export const setFavorite = (favoriteCharacters:Result):FavoriteCharacterAction => {
    return{
        type:"@favorites/setFavorite", payload: favoriteCharacters
    }
}
export const removeFavorite = (id:number):FavoriteCharacterAction => {
    return{
        type:"@favorites/removeFavorite", id: id
    }
}
export const cleanFavorites = ():FavoriteCharacterAction => {
    return{
        type:"@favorites/cleanFavorites"
    }
}