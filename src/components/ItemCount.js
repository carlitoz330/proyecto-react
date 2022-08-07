
import React, { useState } from "react";
import '../stylesheets/ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    

    const [contador, setContador] = useState(initial)

        const suma = () => {
        if (contador < stock)
        setContador(contador + 1)
    } 

    const resta = () => {
        if (contador > 0)
        setContador(contador -1)
    }

    
       
 
    return (
        <>
        <div className="contenedorCuenta"> 
            <div className="iconosCuenta">
                <button className="botonCuenta" onClick={stock > 0 ? resta : ""}> - </button>
                <p className="resultadoCuenta">{contador}</p>
                <button className="botonCuenta" onClick={stock > 0 ? suma : ""}> + </button>
            </div>
            <button className="agregarItem" onClick={stock > 0 ? () => onAdd(contador) : ``}> añadir al Carrito</button>
        </div>
        </>
    )


}


export default ItemCount;







