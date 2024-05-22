import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Calculator from './Page/Calculator';


function App() {
  return (
    <div className="App">
      <Navbar/>
   <div className="container mt-5">
   <Calculator/>
   </div>
    </div>
  );
}

export default App;





