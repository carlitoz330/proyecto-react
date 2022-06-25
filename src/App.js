import logo from './logo.svg';
import './App.css';
import Navbar from  './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
        <div className='contenedorPrincipal'>
          <Navbar />
          <ItemListContainer 
          titulo= "Tienda de Peliculas de Control Solar"/>
          
        </div> 
              
    </div>
  );
}

export default App;



