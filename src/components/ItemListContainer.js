import React, { useState, useEffect }  from "react";
import '../stylesheets/ItemListContainer.css';
import ItemList from "./ItemList";



function ItemListContainer () {
    
    const onAdd = () => {
        alert('Añadiste elementos seleccionados')
    }

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect (() => {

        setTimeout(() => {
            
          
            const getProducts = async () => {
                try {
                    const res = await fetch("https://fakestoreapi.com/products");
                    const data = await res.json();
                    setProducts(data); 
                }
                catch (err) {
                    setError(true);
                    console.log(err);
                }
                finally {
                    setLoading(false);
                }
            } 

            getProducts()
        }, 2000);     

    }, [])


    
    return (
        <>

        <ItemList products = {products} />

        </>
    )
}





export default ItemListContainer;