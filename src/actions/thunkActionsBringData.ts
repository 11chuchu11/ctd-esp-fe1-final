import { changePage, getCharacters } from "../Helpers/dataFromApi"
import {ThunkAction, Action} from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { Result, Characters } from "../Helpers/types/typesAPIs";

export const getDataFromApiThunk = ():ThunkAction<void, IRootState, unknown, Action> => {
    return async (dispatch) => {
        const characters:Characters = await getCharacters("")
        dispatch({type:"@allCharacters/getDataFromApi",payload:{characters:characters.results, pages:{
            page: characters.info.pages, nextPage: characters.info.next, prevPage: characters.info.prev}
        }})
    }
}
export const changePageThunk = (page:string):ThunkAction<void, IRootState, unknown, Action> => {
    return async (dispatch) => {
        const characters:Characters = await changePage(page)
        dispatch({type:"@allCharacters/changePage",payload:{characters:characters.results, pages:{
            page: characters.info.pages, nextPage: characters.info.next, prevPage: characters.info.prev}
        }})
    }
}

export const filterCharactersThunk = (name:string):ThunkAction<void, IRootState, unknown, Action> => {
    return async (dispatch) => {
        const characters:Characters = await getCharacters(name)
        dispatch({type:"@allCharacters/filtered", payload: {characters:characters.results, pages:{
            page: characters.info.pages, nextPage: characters.info.next, prevPage: characters.info.prev}
        }})
    }
}
