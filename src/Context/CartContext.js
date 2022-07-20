import React, { useState, createContext, useEffect } from "react";

export const contexto = createContext([])
const { Provider } = contexto;

const CustomProvider = ({children}) => {
    
    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyproducts] = useState(0);

    const GetQtyProducts = () => {
     let qty = 0;
     products.forEach(product => {
        qty += product.qty;
     }
     )
     setQtyproducts(qty);    
    }

    useEffect(() => {
        GetQtyProducts();    
    }, [products])

    const addProduct = (product) => {
       if(IsInList(product.id)){
        const found = products.find( p => p.id === product.id);
        const index = products.indexOf(found)
        const aux = [...products];
        aux[index].qty += product.qty;
        setProducts(aux); 
       }
       else {
        setProducts([...products, product]);
       }
       GetQtyProducts()
    }

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id ));
        GetQtyProducts()
    }

    const resetList = () => {
        setProducts([])
        setQtyproducts(0)
    }

    const IsInList = (id) => {
        return products.some(product => product.id === id)
    }

    

    

    return (
        <Provider value={{products, addProduct, removeProduct, resetList, qtyProducts}}>
            {children}
        </Provider>
        
    )

}


export default CustomProvider;