import { useEffect } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useDispatch} from 'react-redux';
import { getDataFromApiThunk } from '../../actions/thunkActionsBringData';
import { useSelector } from '../../store/store';
import { Result } from '../../Helpers/types/typesAPIs';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const personajes = useSelector( state => state.characters.characters)

    

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDataFromApiThunk())
    },[])

    return <div className="grilla-personajes">
        {personajes.map((e,i)=><TarjetaPersonaje element={e} key={`character-${e.name}-${i}`}/>)}
    </div>
}

export default GrillaPersonajes;