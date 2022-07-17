import './App.css';
import Navbar from  './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CustomProvider from './Context/CartContext'




const App = () => {

  return (  
    
    <BrowserRouter>  
      <CustomProvider>
          <div className="App">
              <div className='contenedorPrincipal'>
                  <Navbar />
                  <div className='contenedorProductos'> 

                  <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryName" element={<ItemListContainer />} />
                    <Route path="/product/:id" element={<ItemDetailContainer />} />
                    <Route path="/Cart" element={<Cart />} />

                  </Routes>                        
                  </div>
              </div> 
          </div>
      </CustomProvider>  
    </BrowserRouter> 
     
  );
}

export default App;



