import React from "react";
import '../stylesheets/AddProducts.css';
import { Link } from "react-router-dom";

const AddProducts = () => {

return (
    <Link to="/cart">
    <button className="botonCompra">Finalizar Compra</button>
    </Link>
)

}


export default AddProducts;