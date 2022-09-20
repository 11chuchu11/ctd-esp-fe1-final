import React,{useRef} from 'react';
import { useDispatch } from 'react-redux';
import { filterCharactersThunk } from '../../actions/thunkActionsBringData';

import './filtros.css';

const Filtros = () => {
    const input = useRef<HTMLInputElement>(null)   
    const dispatch = useDispatch()

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input ref={input} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={()=>dispatch(filterCharactersThunk(input.current != null ? input.current.value : ""  ))} />
    </div>
}

export default Filtros;