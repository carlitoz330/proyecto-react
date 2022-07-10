import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/ItemDetail.css';
import ItemCount from './ItemCount'
import AddProducts from "./AddProducts";



const  ItemDetail = ({product}) => {

     

    const onAdd  = () => {
        setVista(<AddProducts/>)
        vista = <AddProducts/>
    }

    const [vista, setVista] = useState(<ItemCount stock={5} initial={0} onAdd={onAdd}/>)


    return (
        <div className="contenedorItemDetail">
            <div className="contenedorImagen">
                <img className="imagenDetail" src={product.image} />
            </div>
            <div className="contenedorInfo">
                <h1 className="tituloDetalle">{product.title}</h1>
                <p className="descripcionProducto">{product.description}</p>
                <p className="precioDetalle">${product.price}</p>
                <p className="categoriaDetalle">{product.category}</p>
                <div> {vista} </div>
                {/* <Link to="/cart">
                    <button>Compra</button>
                </Link> */}

            </div>
        </div>
        
    )


}



export default ItemDetail;