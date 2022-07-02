import './App.css';
import Navbar from  './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  return (
    <div className="App">
        <div className='contenedorPrincipal'>
          <Navbar />
            <div className='contenedorProductos'>
            <ItemListContainer />
            </div>
        </div> 
              
    </div>
  );
}

export default App;



