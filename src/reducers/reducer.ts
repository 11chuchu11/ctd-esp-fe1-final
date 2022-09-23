import { Episode, Result, Characters, DetailAction} from "../Helpers/types/typesAPIs";
import {AnyAction, Reducer} from "@reduxjs/toolkit"
import { payloadData } from "../Helpers/types/typesAPIs";




const initialStateBringCharacters:payloadData = {
    characters: [],
    page:{
        pages: 1,
        nextPage: "", 
        prevPage: "",
}
}



/**
 * Reducer used to control all related to show characters
 * 
 * @author Franco Veron Peralta
 * @param {payloadData} state 
 * @param {AnyAction}action 
 * @returns 
 */
export const bringCharactersReducer:Reducer<payloadData> = (state:payloadData = initialStateBringCharacters, action:AnyAction) => {
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


/**
 * Reducer used to handle the favorite actions
 * 
 * @author Franco Veron Peralta
 * @param {Result} state 
 * @param {AnyAction}action 
 * @returns 
 */
export const favoritesCharacters:Reducer<Result[]> = (state:Result[]=[], action:AnyAction)=>{
    switch (action.type){
        case "@favorites/setFavorite":
            return [...state,{...action.payload, isFavorite: true}]
        case "@favorites/removeFavorite":
            const favoritesCharacters:Result[] = state.filter((e:Result)=>e.id !== action.id)
            return [...favoritesCharacters]
        case "@favorites/cleanFavorites":
            return []
        default:
            return state
        }
}



const initialStateDetail:Result={
    created:  new Date(),
    episode:  [],
    gender:   "unknown",
    id:       NaN,
    image:    "",
    location: {name:"",url:""},
    name:     "",
    origin:   {name:"",url:""},
    species:  "Human",
    status:   "unknown",
    type:     "",
    url:      "",
    isFavorite: false
    
}

/**
 * Controls the actions related to detail
 * 
 * @author Franco Veron Peralta
 * @param {Result} state 
 * @param {AnyAction}action 
 * @returns 
 */
export const detailCharacter:Reducer<Result> = (state:Result=initialStateDetail, action:AnyAction)=>{
    switch (action.type){
        case "@details/addToDetails":
            return {...action.payload}
        default:
            return {...state}
        }
}


/**
 * Controls the actions used to handle how episode are shown
 * 
 * @author Franco Veron Peralta
 * @param {Episode[]} state 
 * @param {AnyAction}action 
 * @returns 
 */
export const episodeReducer: Reducer<Episode[]> = (state:Episode[]=[], action:AnyAction)=>{
    switch (action.type){
        case "@episode/getDetailsEpisode":
            return[...state,action.episodes]
        case "@details/cleanEpisode":
            return []
        default:
            return state
    }
} 

