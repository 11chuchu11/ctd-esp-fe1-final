import './paginacion.css';
import { changePageThunk } from '../../actions/thunkActionsBringData';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from '../../store/store';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    const dispatch = useDispatch()
    const page = useSelector( state => {
        console.log("infoPage: ", state.characters.page)
        return state.characters.page
    })


    return <div className="paginacion">
        <button disabled={false} className={"primary"} onClick={()=> page.prevPage !== null ? dispatch(changePageThunk(page.prevPage)) : null }>Anterior</button>
        <button disabled={false} className={"primary"} onClick={()=> page.nextPage !== null ? dispatch(changePageThunk(page.nextPage)) : null }>Siguiente</button>
    </div>
}

export default Paginacion;