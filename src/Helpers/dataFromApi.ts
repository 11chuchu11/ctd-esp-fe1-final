import { error } from "console"
import {  Result, RootObject } from "./types/typesAPIs"

export const getAllCharacters =  async ( page:number=1 ):Promise<RootObject> => {
    try{

        const callApi = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const apiResponse = await callApi.json()
        const characters = apiResponse.results.map((e:Result) => {return {...e,isFavorite:false}})
        return {...apiResponse,results: characters}
    }
    catch(error){
        throw new Error("error")
    }
}



export const getFilteredCharacters = async ( name:string  ):Promise<RootObject> => {
    try{
        const callApi = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const apiResponse = await callApi.json()
        const characters = apiResponse.results.map((e:Result) => {return {...e,isFavorite:false}})
        return {...apiResponse, results: characters}
    }
    catch(error){
        throw new Error("error")
    }
} 

export const changePage =  async ( page:string ):Promise<RootObject> => {
    try{

        const callApi = await fetch(`${page}`)
        const apiResponse = await callApi.json()
        const characters = apiResponse.results.map((e:Result) => {return {...e,isFavorite:false}})
        return {...apiResponse,results: characters}
    }
    catch(error){
        throw new Error("error")
    }
}