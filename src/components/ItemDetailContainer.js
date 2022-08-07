import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(true);

    const { id } = useParams();
    

    useEffect(() => {
        const productsCollection = collection(db, 'productos');
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
        .catch(err => console.log(error))
        .finally(() => setLoaded(false))
    }, [id]);

 
    return(
        
        <>
        <ItemDetail product={product}  />
        </>
    )
}






export default ItemDetailContainer;