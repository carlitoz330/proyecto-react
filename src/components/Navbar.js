import React from "react";
import '../stylesheets/Navbar.css';
import logo from '../imagenes/logo.JPG';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar () {
  return (
    <div className="contenedorNav">
      <Link to="/"><img className="logo" src={logo}/></Link>
      <h1 className="titulo">Window films</h1>
      <nav className="navegacion">
          <a href="">Inicio</a>
          <a href="">Control Solar</a>
          <a href="">Seguridad</a>
          <a href="">Decorativo</a>
      </nav>
      <CartWidget />

    </div> 
  );    
}

export default NavBar;