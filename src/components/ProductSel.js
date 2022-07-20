import React, { useContext } from "react";
import { contexto } from '../Context/CartContext';
import '../stylesheets/ProductoSel.css';

const ProductoSel = ({ product }) => {

    const { removeProduct  } = useContext(contexto);
    

    return (
    
        <div className="contenedorSel">
            <div className="">
                <img  className="imagenSel" src={product.image} />
            </div>
            <div className="contenedorSel">
                <h2 className="tituloSel">{product.title}</h2>
                <p className="precioSel"> {product.id}</p>
                <p className="precioSel"> ${product.price}</p>
                <p className="cantidadSel"> Cantidad {product.qty}</p> 
                <button className="botomSel" > x </button>
            </div>           
            
        </div>   
        
        
        
    )


}




export default ProductoSel;