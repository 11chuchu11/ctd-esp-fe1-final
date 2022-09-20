import {ThunkAction, AnyAction} from "@reduxjs/toolkit";
import { Result } from "../Helpers/types/typesAPIs";
import { IRootState } from "../store/store";

// export const getDataFromApiThunk = ():ThunkAction<void, IRootState, unknown, Action> => {
//     return async (dispatch) => {

//         dispatch({type:"getDataFromApi",payload:characters })
//     }
// }

interface favoriteCharacterAction extends AnyAction{
    type:string;
    payload?:Result
    id?:number
}

export const setFavorite = (favoriteCharacters:Result):favoriteCharacterAction => {
    return{
        type:"@favorites/setFavorite", payload: favoriteCharacters
    }
}
export const removeFavorite = (id:number):favoriteCharacterAction => {
    return{
        type:"@favorites/removeFavorite", id: id
    }
}