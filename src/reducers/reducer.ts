import { Result, RootObject} from "../Helpers/types/typesAPIs";
import {Reducer} from "@reduxjs/toolkit"
import { payloaData } from "../actions/thunkActionsBringData";



const initialStateBringCharacters:payloaData = {
    characters: [],
    page:{
        pages: 1,
        nextPage: "", 
        prevPage: "",
}
}


export const bringCharactersReducer:Reducer<payloaData> = (state = initialStateBringCharacters, action) => {
    switch (action.type){
        case "@allCharacters/getDataFromApi":
            return {characters:[...action.payload.characters],page: {...action.payload.pages}}
        case "@allCharacters/changePage":
            return {characters:[...action.payload.characters], page: {...action.payload.pages}}
        case "@allCharacters/filtered":
            return {characters:[...action.payload.characters], page: {...action.payload.pages}}
        default:
            return state
    }
}

export const favoritesCharacters:Reducer<Result[]> = (state=[], action)=>{
    switch (action.type){
        case "@favorites/setFavorite":
            return [...state,{...action.payload, isFavorite: true}]
        case "@favorites/removeFavorite":
            const favoritesCharacters = state.filter((e:Result)=>e.id !== action.id)
            return [...favoritesCharacters]
        default:
            return state
        }
}