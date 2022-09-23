import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { removeFavorite, setFavorite } from '../../actions/actionsFavoritesCharacters';
import { Result } from '../../Helpers/types/typesAPIs';
import { useSelector } from '../../store/store';


import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * @param {boolean} esFavorito
 * @param {MouseEventHandler<HTMLImageElement>} onClick
 * @returns un JSX element 
 */

interface props {
    character: Result
}


const BotonFavorito = ({character}:props) => {

    const isFavorite:Result|undefined = useSelector( state => state.favorites.find((e:Result) => e.id === character.id)) 
    const dispatch:Dispatch<any> = useDispatch()

    const src:string = isFavorite?.isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={()=> isFavorite?.isFavorite ?
                    dispatch(removeFavorite(isFavorite.id)) : dispatch(setFavorite(character))} />
    </div>
}

export default BotonFavorito;