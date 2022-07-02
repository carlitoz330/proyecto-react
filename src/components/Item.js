import React from "react";
import '../stylesheets/Item.css';

const Item = ({ product }) => {

    return (
        <div className="contenedorItem">
            <img src={product.image} />
            <h2 className="tituloProducto">{product.title}</h2>
            <p className="precioProducto"> ${product.price}</p>

        </div>    
    )


}





export default Item;