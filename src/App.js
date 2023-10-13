// import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar.js';
import Menu from './components/Menu.js';
import Cards from './components/Cards.js';
import Slide from './components/Slide.js';
import Form from './components/Forms';
import './css/bootstrap.css';
import Forms from './components/Forms';
import Prod from './components/Prod';

function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Slide/>
                <Cards/>
                <Prod/>
                <Forms/>
                
        </div>
   </div>
   </>
  );
}

export default App;

