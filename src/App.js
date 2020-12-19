import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap'
import MenuComponent from './components/MenuComponent'

function App() {
  return (
    <div>
        <Navbar dark color="primary"> 
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent/>
    </div>
  );
}

export default App;
