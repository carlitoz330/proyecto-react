import React, { useContext, useState, useEffect } from "react";
import { contexto } from '../Context/CartContext';
import ProductoSel from "./ProductSel";


const Cart = () => {

   const { products, resetList  } = useContext(contexto);
    
   
    const [price, setPrice] = useState(0);

    const totalPrice = () => {
     let price = 0;
     products.forEach(product => {
        price += product.price;
     }
     )
     setPrice(price);  
     console.log(price)  
    }

    useEffect(() => {
        totalPrice();    
    }, [products])

   
return (

    <div className="contenedorCart">
        {products.map(product  => (
            <ProductoSel  key= {product.id} product={product}/>
        ))}  

        <div>Precio total = {price}</div>      
       <button onClick={resetList}>Vaciar Carrito</button>
       

    </div>

    
)


}




export default Cart;  