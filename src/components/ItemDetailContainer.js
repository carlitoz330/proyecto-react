import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";



export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(true);

    const { id } = useParams();
    

    useEffect (() => {


            

            const getItem = async () => {                

                try {
                    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                    const data = await res.json();
                    setProduct(data); 
                }
                catch (err) {
                    setError(true);
                    console.log(err);
                }
                finally {
                    setLoaded(false);
                }
            } 

            getItem()
            console.log(getItem)
            

    }, [id])




    return(
        
        <>
        <ItemDetail product={product}  />
        </>
    )
}






export default ItemDetailContainer;