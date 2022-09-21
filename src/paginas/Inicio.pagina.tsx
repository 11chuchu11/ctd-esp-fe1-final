import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import React,{  RefObject, useRef } from "react";
import { useSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { filterCharactersThunk } from "../actions/thunkActionsBringData";
import { Dispatch } from "@reduxjs/toolkit";
import { Result } from "../Helpers/types/typesAPIs";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const dispatch:Dispatch<any> = useDispatch()

    /**
     * 
     */
    const characters:Result[] = useSelector( state => state.characters.characters)
    
    /**
     * Cleans the input value and makes a reload of the showed characters
     *
     *  @author Franco Veron Peralta
     */
    const cleanFilter = ():void => {
        if(filter.current!== null){
            filter.current.value=""
        }
        dispatch(filterCharactersThunk(""))
    }

    const filter:RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null) 


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=>{cleanFilter()}}>Limpiar filtro</button>
        </div>

        <Filtros ref={filter} onChange={()=> dispatch(filterCharactersThunk(filter.current!== null ? filter.current.value: ""))}/>
        <Paginacion />
        <GrillaPersonajes characters={characters}/>
        <Paginacion />
    </div>
}

export default PaginaInicio