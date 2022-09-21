import { AnyAction} from "@reduxjs/toolkit";
import { Result } from "../Helpers/types/typesAPIs";

interface FavoriteCharacterAction extends AnyAction{
    type:string;
    payload?:Result
    id?:number
}

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