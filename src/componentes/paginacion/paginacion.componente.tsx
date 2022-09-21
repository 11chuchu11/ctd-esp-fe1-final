import './paginacion.css';
import { changePageThunk } from '../../actions/thunkActionsBringData';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/store';
import { Page } from '../../Helpers/types/typesAPIs';
import { Dispatch } from '@reduxjs/toolkit';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    const dispatch:Dispatch<any> = useDispatch()
    const page:Page= useSelector( state => state.characters.page)


    return <div className="paginacion">
        <button disabled={page.prevPage === null} className={"primary"} onClick={()=> dispatch(changePageThunk(page.prevPage))}>Anterior</button>
        <button disabled={page.nextPage === null} className={"primary"} onClick={()=> dispatch(changePageThunk(page.nextPage))}>Siguiente</button>
    </div>
}

export default Paginacion;