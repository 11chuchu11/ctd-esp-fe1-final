import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cleanDataEpisode, getDetail } from '../../actions/actionDetail';
import { removeFavorite, setFavorite } from '../../actions/actionsFavoritesCharacters';
import { Result } from '../../Helpers/types/typesAPIs';
import { useSelector } from '../../store/store';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @param {Result} element 
 * @returns un JSX element 
 */

interface props{
    element: Result
}

const TarjetaPersonaje = ({element}:props) => {
    
    
    const dispatch:Dispatch<any> = useDispatch()

    return <div className="tarjeta-personaje">
        <Link to="/detalle">
        <img src={element.image} alt={element.name} onClick={()=>{
            dispatch(cleanDataEpisode())
            dispatch(getDetail(element))
        }}/>
        </Link>
        <div className="tarjeta-personaje-body" >
            <span>{element.name}</span>
            <BotonFavorito character={element} />
        </div>
    </div>
}

export default TarjetaPersonaje;