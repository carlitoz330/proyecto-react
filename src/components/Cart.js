import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contexto } from '../Context/CartContext';
import ProductoSel from "./ProductSel";
import Form from "./Form"
import '../stylesheets/Cart.css';
import { db } from "../firebase/firebase";
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"


const Cart = () => {

   const { products, resetList } = useContext(contexto);
   
   
    const [ idVenta, setIdVenta ] = useState("")
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


    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            items: products,
            date: serverTimestamp(),
            total: price
        })
        
        .then((resul) => {
            setIdVenta(resul.id)
        }) 

        console.log(products)

        const updateCollection = doc(db, "productos", "id" );
        updateDoc(updateCollection, {stock: products.stock - products.qty})
    }




   
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

                <button onClick={resetList} className="vaciarCarro" >Vaciar Carrito</button>      
                <div className="infoPrecioVenta"> Precio total = <span className="precioVenta"> $ {price} </span> </div>      
                              
                <Form />
            
            </div>

            <button onClick={finalizarCompra}>Finalizar Compra</button>
                  

        </>    
        }
    </>

    
)


}




export default Cart;  