import { useEffect } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useDispatch} from 'react-redux';
import { getDataFromApiThunk } from '../../actions/thunkActionsBringData';
import { useSelector } from '../../store/store';
import { Result } from '../../Helpers/types/typesAPIs';
import { Dispatch } from '@reduxjs/toolkit';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * @param {Result[]} characters
 * @returns un JSX element 
 */

interface props{
    characters:Result[]
}

const GrillaPersonajes = ({characters}:props) => {


    
    

    const dispatch:Dispatch<any> = useDispatch()

//when the component is mounted, it makes the first call to the api
    useEffect(()=>{
        dispatch(getDataFromApiThunk())
    },[])

    return <div className="grilla-personajes">
        {characters.map((e:Result,i:number)=><TarjetaPersonaje element={e} key={`character-${e.name}-${i}`}/>)}
    </div>
}

export default GrillaPersonajes;