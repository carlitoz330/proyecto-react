import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/Item.css';

const Item = ({ product }) => {

    return (
        <div className="contenedorItem">
            <img src={product.image} alt="" />
            <h2 className="tituloProducto">{product.title}</h2>
            <p className="precioProducto"> ${product.price}</p>
            <Link to={`/product/${product.id}`}>
            <button className="verProducto">Ver producto</button>
            </Link>
        </div>    
    )


}





export default Item;