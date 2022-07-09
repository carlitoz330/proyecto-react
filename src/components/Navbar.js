import React  from "react";
import '../stylesheets/Navbar.css';
import logo2 from '../imagenes/logo2.png';
import CartWidget from './CartWidget';
import { NavLink, Link } from "react-router-dom";
import Cart from './Cart';

function NavBar () {

  const categories = [
    { name: "electronics", id: 0, route: "/category/electronics" },
    { name: "jewelery", id: 1, route: "/category/jewelery" },
    { name: "men's clothing", id: 2, route: "/category/men's clothing" },
    { name: "women's clothing", id: 3, route: "/category/women's clothing" },
  ]

  return (
    <div >
    <div className="contenedorNav">  
        <Link to="/"><img className="logo" src={logo2}/></Link>
        <Link to="/" className="titulo">Varieties Store</Link>
        <Link to="/Cart"> <CartWidget /> </Link>
      </div>
      <div>
        <nav className="navegacion">
          {categories.map((category) => <NavLink className={"link"} key={categories.id} to={category.route}>{category.name}</NavLink>)}
        </nav> 
      </div>    

    </div> 
  );    
}

export default NavBar;