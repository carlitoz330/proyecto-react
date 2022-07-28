
import React from "react";


function Form (finalizarCompra) {

 


    
    return (
    <div>
        <form >
           

                <div>
                    <label>Nombre Completo</label>
                    <input type="text" placeholder="Tu Nombre"/>
                </div>

                <div>
                    <label>Cedula</label>
                    <input  type="number" placeholder="Tu Cedula"/>
                </div>

                <div>
                <label>Direccion</label>
                <input type="text" placeholder="Tu Dirección"/>
                </div>

                <div>
                    <label>telefono</label>
                    <input id="telefono" type="tel" placeholder="Tu Telefono"/>
                </div>

                <div>
                <label>Email</label>
                <input id="correo" type="email" placeholder="Tu Email"/>
                </div>

                {/* <div>
                    <input type="submit" value=" Finalizar compra"  />
                </div> */}

        </form>
    </div>


    )

}

export default Form;

