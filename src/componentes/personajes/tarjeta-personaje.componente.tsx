import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
 * 
 * @returns un JSX element 
 */

interface props{
    element: Result
}

const TarjetaPersonaje = ({element}:props) => {
    
    const isFavorite = useSelector( state => state.favorites.find((e:Result) => e.id === element.id)) 
    const dispatch = useDispatch()

    return <div className="tarjeta-personaje">
        <img src={element.image} alt={element.name}/>
        <div className="tarjeta-personaje-body">
            <span>{element.name}</span>
            <BotonFavorito esFavorito={isFavorite?.isFavorite||false} onClick={()=> isFavorite?.isFavorite ?
                    dispatch(removeFavorite(isFavorite.id)) : dispatch(setFavorite(element))} />
        </div>
    </div>
}

export default TarjetaPersonaje;