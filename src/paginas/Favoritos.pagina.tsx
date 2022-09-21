import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cleanFavorites } from "../actions/actionsFavoritesCharacters";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { Result } from "../Helpers/types/typesAPIs";
import { useSelector } from "../store/store";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const favorites:Result[] = useSelector(state => state.favorites)
    const dispatch:Dispatch<any> = useDispatch()

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=>dispatch(cleanFavorites())}>Eliminar Todos</button>
        </div>
        <GrillaPersonajes characters={favorites} />
    </div>
}

export default PaginaFavoritos