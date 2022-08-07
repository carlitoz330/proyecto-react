import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contexto } from '../Context/CartContext';
import ProductoSel from "./ProductSel";
import '../stylesheets/Cart.css';
import { db } from "../firebase/firebase";
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"
import swal from 'sweetalert';
import Form from "./Form" 


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

            swal({
                title: "Transaccion exitosa!",
                text: `El id de su compra es: ${resul.id}`,
                icon: "success",
              });    

              

        }) 

        resetList()

        

        console.log((products[0].id))
        
        products.forEach(product => {
            const updateCollection = doc(db, "productos", product.id  );
            updateDoc(updateCollection, {stock: product.stock - product.qty})
           }
        )

        

        
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
            
            </div>

            <Form />

            <button className="botonFinalizar" onClick={finalizarCompra}>Finalizar Compra</button>
                  

        </>    
        }
    </>

    
)


}




export default Cart;  