import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import CarsList from './components/CarsList';
import { CarProvider } from './components/CarContext';
import NewCar from './components/NewCar';

function App() {
  return (
    <CarProvider>

      <div className="main-container">
        <NavBar />
        <div className="heading">
          <h2>Welcome to Our Car Rental System</h2>
        </div>
      </div>


      <Switch>
        <Route path="/allCars" component={CarsList} />
        <Route path="/newCar" component={NewCar} />
      </Switch>
    </CarProvider>
  );
}

export default App;
