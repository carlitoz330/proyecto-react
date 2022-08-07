
import React from "react";
import '../stylesheets/Formulario.css';


function Form () {

 


    
    return (
    <div className="contenedorForm">

        <form className="formulario">
           
            <fieldset >
                <legend className="tituloForm">Completa los datos para la compra</legend>
                <div className="campo">
                    <label>Nombre Completo</label>
                    <input className="imput-text" type="text" placeholder="Tu Nombre"/>
                </div>

                <div className="campo">
                    <label>Cedula</label>
                    <input className="imput-text" type="number" placeholder="Tu Cedula"/>
                </div>

                <div className="campo">
                    <label>Direccion</label>
                    <input className="imput-text" type="text" placeholder="Tu Dirección"/>
                </div>

                <div className="campo">
                    <label>telefono</label>
                    <input className="imput-text" id="telefono" type="tel" placeholder="Tu Telefono"/>
                </div>

                <div className="campo">
                    <label>Email</label>
                    <input className="imput-text" id="correo" type="email" placeholder="Tu Email"/>
                </div>
            </fieldset>
                

        </form>
    </div>


    )

}

export default Form;

