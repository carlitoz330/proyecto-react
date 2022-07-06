import './App.css';
import Navbar from  './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';




const App = () => {

  return (  
    
    <BrowserRouter>  
      <div className="App">
          <div className='contenedorPrincipal'>
              <Navbar />
              <div className='contenedorProductos'> 

              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/product/:id" element={<ItemDetailContainer />} />

              </Routes>                        
              </div>
          </div> 
      </div>
      </BrowserRouter>   
  );
}

export default App;



