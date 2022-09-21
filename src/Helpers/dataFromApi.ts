import { error } from "console"
import {  Episode, Result, Characters } from "./types/typesAPIs"

/**
 * Used to get an object with informarion of pages and an array of characters
 * @author Franco Veron Peralta
 * @param {string} name 
 * @returns {Characters} 
 */
export const getCharacters = async ( name:string  ):Promise<Characters> => {
    try{
        const callApi:Response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const apiResponse:Characters = await callApi.json()
        const characters:Result[] = apiResponse.results.map((e:Result) => {return {...e,isFavorite:false}})
        return {...apiResponse, results: characters}
    }
    catch(error:any){
        throw new Error(error)
    }
} 

/**
 * Used to bring the data of the next or prev page
 * 
 * @author Franco Veron Peralta
 * @param {string} name 
 * @returns {Characters} 
 */
export const changePage =  async ( page:string ):Promise<Characters> => {
    try{

        const callApi:Response = await fetch(`${page}`)
        const apiResponse:Characters = await callApi.json()
        const characters:Result[] = apiResponse.results.map((e:Result) => {return {...e,isFavorite:false}})
        return {...apiResponse,results: characters}
    }
    catch(error:any){
        throw new Error( error )
    }
}

/**
 * Returns the information of episode specified by the params
 * 
 * @author Franco Veron Peralta
 * @param {string} episode 
 * @returns {Episode}
 */
export const getEpisode = async (episode: string):Promise<Episode> =>{
    try{
        const callApi:Response = await fetch(`${episode}`)
        const apiResponse:Episode = await callApi.json()
        return apiResponse
    }
    catch(error:any){
        throw new Error(error)
    }
}