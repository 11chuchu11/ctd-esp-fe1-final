import { useDispatch } from 'react-redux';
import { getDataFromApiThunk } from '../../actions/thunkActionsBringData';

import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */

interface props {
    esFavorito:boolean;
    onClick?: React.MouseEventHandler<HTMLImageElement>
}


const BotonFavorito = ({esFavorito, onClick}:props) => {

    const dispatch = useDispatch()

    const src:string = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
}

export default BotonFavorito;