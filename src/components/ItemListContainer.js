import React, { useState, useEffect }  from "react";
import '../stylesheets/ItemListContainer.css';
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';



function ItemListContainer () {
    
    

    const {categoryName} = useParams();

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    

    useEffect (() => {

        setTimeout(() => {
            const url = categoryName
                ? `https://fakestoreapi.com/products/category/${categoryName}`
                : `https://fakestoreapi.com/products`
            
          
            const getProducts = async () => {
                try {
                    const res = await fetch(url);
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

    }, [categoryName])


    
    return (
        <>

        <ItemList products = {products} />

        </>
    )
}





export default ItemListContainer;