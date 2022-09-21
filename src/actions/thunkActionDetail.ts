import { Action, ThunkAction } from "@reduxjs/toolkit"
import { getEpisode } from "../Helpers/dataFromApi"
import { Episode } from "../Helpers/types/typesAPIs"
import { IRootState } from "../store/store"

export const getEpisodeThunk = (page:string):ThunkAction<void, IRootState, unknown, Action> => {
    return async (dispatch) => {
        const episode:Episode = await getEpisode(page)
        dispatch({type:"@episode/getDetailsEpisode", episodes: episode})
    }
}