import React, { useState, useContext } from "react";
import '../stylesheets/ItemDetail.css';
import ItemCount from './ItemCount'
import AddProducts1 from "./AddProducts1";
import { contexto } from "../Context/CartContext"



const  ItemDetail = ({product}) => {

    const {addProduct} = useContext(contexto)
    const [finalized, setFinalized] = useState(false)
     

    const onAdd  = (contador) => {
        if(contador > 0) {
        setFinalized(true)
        addProduct({...product, qty: contador});
    }
    
    }



    return (
        <div className="contenedorItemDetail">
            <div className="contenedorImagen">
                <img className="imagenDetail" alt="" src={product.image} />
            </div>
            <div className="contenedorInfo">
                <h1 className="tituloDetalle">{product.title}</h1>
                <p className="descripcionProducto">{product.description}</p>
                <p className="precioDetalle">${product.price}</p>
                <p className="categoriaDetalle">{product.category}</p>
                <div> 
                {!finalized 
                ? <ItemCount stock={product.stock} initial={0} onAdd={onAdd}/>
                : <AddProducts1/>}
                </div>
                

            </div>
        </div>
        
    )


}



export default ItemDetail;