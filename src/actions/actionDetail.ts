import { AnyAction } from "@reduxjs/toolkit";
import { DetailAction, Result } from "../Helpers/types/typesAPIs";



export const getDetail = (character:Result):DetailAction=>{
    return{
        type:"@details/addToDetails",
        payload: character
    }
}

export const cleanDataEpisode = ():DetailAction=>{
    return{
        type:"@details/cleanEpisode",
    }
}
