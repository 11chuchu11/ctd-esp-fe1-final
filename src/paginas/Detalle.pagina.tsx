import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { getEpisodeThunk } from "../actions/thunkActionDetail";
import { useEffect } from "react";
import { Episode, Result } from "../Helpers/types/typesAPIs";
import { cleanDataEpisode } from "../actions/actionDetail";
import { removeFavorite, setFavorite } from "../actions/actionsFavoritesCharacters";
import { Dispatch } from "@reduxjs/toolkit";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    
    const dispatch:Dispatch<any> = useDispatch()
    const character:Result = useSelector(state => state.detail)
    const episodes:Episode[] = useSelector(state => state.episodesDetail)
    const isFavorite:Result|undefined = useSelector( state => state.favorites.find((e:Result) => e.id === character.id))


//When the component is mounted, makes the respective api calls to get the list of episodes
    useEffect(()=>{
        character.episode.forEach( (e:string,i:number)=>{
            dispatch(getEpisodeThunk(e))
        })
    },[])

    return <div className="container">
        <h3>{character.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={character.image} alt={character.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{character.name}</p>
                    <p>Planeta: {character.origin.name}</p>
                    <p>Genero: {character.gender}</p>
                </div>
                <BotonFavorito esFavorito={isFavorite?.isFavorite||false} onClick={()=> isFavorite?.isFavorite ?
                    dispatch(removeFavorite(isFavorite.id)) : dispatch(setFavorite(character))} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {episodes.map((e:Episode,i:number) => <TarjetaEpisodio episode={e} />)}
        </div>
    </div>
}

export default PaginaDetalle