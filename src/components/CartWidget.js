import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contexto } from '../Context/CartContext';
import '../stylesheets/CartWidget.css';



function CartWidget () {

    const { qtyProducts } = useContext(contexto);

    return (
        <div className="cartWidget">
            <ShoppingCartIcon color="action" sx={{ fontSize: 32 }} />
            <p className="qtyProducts">{qtyProducts > 0 ? qtyProducts : ""}</p>
        </div>
    )
}

export default CartWidget;