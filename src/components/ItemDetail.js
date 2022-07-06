import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/ItemDetail.css';



const  ItemDetail = ({product}) => {

    return (
        <div className="contenedorItemDetail">
            <div className="contenedorImagen">
                <img className="imagenDetail" src={product.image} />
            </div>
            <div className="contenedorInfo">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <Link to="/cart">
                    <button>Compra</button>
                </Link>

            </div>
        </div>
        
    )


}



export default ItemDetail;