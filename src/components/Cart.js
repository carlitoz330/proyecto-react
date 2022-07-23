import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contexto } from '../Context/CartContext';
import ProductoSel from "./ProductSel";
import '../stylesheets/Cart.css';


const Cart = () => {

   const { products, resetList } = useContext(contexto);
    
   
    const [price, setPrice] = useState(0);

    const totalPrice = () => {
     let price = 0;
     products.forEach(product => {
      let total =  product.qty * product.price
        price += total;
     }
     )
     setPrice(price.toFixed(2));  
     
    }

    useEffect(() => {
        totalPrice();    
    }, [products])


    

   
return (

    <>
        { products.length === 0
        ? <h1 className="avisoCompra"> No hay Productos, busca <Link to="/"> aqui </Link></h1>
        :
        <>          
           
            <div className="contenedorCart"> 

                {products.map(product  => (
                    <ProductoSel  key= {product.id} product={product} />
                    ))}  

                <div className="infoPrecioVenta"> Precio total = <span className="precioVenta"> $ {price} </span> </div>      
            <button onClick={resetList} className="vaciarCarro" >Vaciar Carrito</button>
            

            </div>
        </>    
        }
    </>

    
)


}




export default Cart;  