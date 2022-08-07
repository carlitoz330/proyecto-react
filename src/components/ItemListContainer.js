import React, { useState, useEffect }  from "react";
import '../stylesheets/ItemListContainer.css';
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore"



function ItemListContainer () {
    
    

    const {categoryName} = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect (() => {

                const q = categoryName
                ? query(collection(db, 'productos'), where('category', '==', categoryName))
                : collection(db, 'productos');
            
                getDocs(q)
                .then(result => {
                    const lista = result.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    })
                    setProducts(lista);
                })

                .catch (err => console.log(err))
                
                .finally(() => setLoading(false))
                          

    }, [categoryName])

    
    return (
        <>

        {loading ? <>
        
        <p className="cargaProductos"> <CircularProgress color="success" title="ico de carga" /> Cargando productos, espere unos segundos... </p>  </>
        : <ItemList products = {products} />}

        </>
    )
}






export default ItemListContainer;