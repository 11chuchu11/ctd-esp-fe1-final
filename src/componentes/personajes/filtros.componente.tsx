import React,{ HtmlHTMLAttributes, Ref } from 'react';
import './filtros.css';

type InputProps = JSX.IntrinsicElements["input"]

/**
 * @param {JSX.IntrinsicElements["input"]} props
 * @param {Ref<HTMLInputElement>} ref
 */
const Filtros = React.forwardRef((props:InputProps, ref:Ref<HTMLInputElement>) => { 


    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        {props.children}
        <input ref={ref} {...props}type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
})

export default Filtros;