import React from "react";
import '../stylesheets/Navbar.css';

function NavBar () {
  return (
    <div className="contenedorNav">
      <img className="logo" 
      src={require("../imagenes/logo.JPG")}/>
      <h1 className="titulo">Window films</h1>
      <nav class="navegacion">
          <a href="">Inicio</a>
          <a href="">Control Solar</a>
          <a href="">Seguridad</a>
          <a href="">Decorativo</a>
      </nav>

    </div> 
  );    
}

export default NavBar;