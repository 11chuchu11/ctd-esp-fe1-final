import { changePage, getAllCharacters, getFilteredCharacters } from "../Helpers/dataFromApi"
import {ThunkAction, Action} from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { Result } from "../Helpers/types/typesAPIs";

export interface payloaData{
    characters:Result[]; 
    page:{
            pages: number; 
            nextPage: string; 
            prevPage: string;
    }
}



export const getDataFromApiThunk = ():ThunkAction<void, IRootState, unknown, Action> => {
    return async (dispatch) => {
        const characters = await getAllCharacters()
        dispatch({type:"@allCharacters/getDataFromApi",payload:{characters:characters.results, pages:{
            page: characters.info.pages, nextPage: characters.info.next, prevPage: characters.info.prev}
        }})
    }
}
export const changePageThunk = (page:string):ThunkAction<void, IRootState, unknown, Action> => {
    return async (dispatch) => {
        const characters = await changePage(page)
        dispatch({type:"@allCharacters/changePage",payload:{characters:characters.results, pages:{
            page: characters.info.pages, nextPage: characters.info.next, prevPage: characters.info.prev}
        }})
    }
}

export const filterCharactersThunk = (name:string):ThunkAction<void, IRootState, unknown, Action> => {
    return async (dispatch) => {
        const characters = await getFilteredCharacters(name)
        dispatch({type:"@allCharacters/filtered", payload: {characters:characters.results, pages:{
            page: characters.info.pages, nextPage: characters.info.next, prevPage: characters.info.prev}
        }})
    }
}
