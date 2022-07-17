import React, { useState, createContext } from "react";

export const contexto = createContext([])
const { Provider } = contexto;

const CustomProvider = ({children}) => {
    
    const [product, setProducts] = useState([]);
    const [qtyProducts, setQtyproducts] = useState(0);

    const addProduct = (product) => {
       console.log (product)
    }

    const removeProduct = (product) => {
        console.log('Remove User')
    }

    const resetList = () => {
        setProducts([])
    }

    const IsInList = (id) => {
        return product.some(product => product.id === id)
    }

    const getQuantity = () => {
        console.log('Get Quantity')
    }

    

    return (
        <Provider value={{product, addProduct, removeProduct, resetList, getQuantity}}>
            {children}
        </Provider>
        
    )

}


export default CustomProvider;