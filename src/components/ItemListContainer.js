import React  from "react";
import '../stylesheets/ItemListContainer.css';
import ItemCount from './ItemCount';



function ItemListContainer ({titulo}) {
    
    const onAdd = () => {
        alert('Añadiste elementos seleccionados')
    }
    
    return (
        <>

        <h2 className="titulo2"> {titulo} </h2>

        <ItemCount 
            initial={0}  stock={6} onAdd={onAdd}
        />

        </>
    )
}





export default ItemListContainer;