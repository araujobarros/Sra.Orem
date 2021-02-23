import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Sobre from './pages/Sobre';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <header>
          <h1>Sra. Orem</h1>
          <nav>
        <Link
          to={ {
            pathname: "/",
          } }
        >Home
        </Link>
        <Link
          to={ {
            pathname: "/Sobre",
          } }
        >Sobre</Link>
        <Link
          to={ {
            pathname: "/Cardapio",
          } }
        >Cardapio</Link>
        </nav>
        </header>
        
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home
                  { ...props }
                />
              ) }
            />
            {/* <Route
              path="/shopping-cart"
              render={ (props) => (
                <ShoppingCart
                  { ...props }
                />
              ) }
            /> */}
            <Route
              path="/Sobre"
              render={ (props) => (
                <Sobre { ...props }
                />
              ) }
            />
            <Route
              path="/Cardapio"
              render={ (props) => (
                <Menu { ...props }
                />
              ) }
            />
            {/* <Route
              path="/delicatessen/:id"
              render={ (props) => (
                <DelicatessenDetails
                  { ...props }
                />
              ) }
            /> */}
            {/* <Route
              path="/checkout"
              render={ (props) => (
                <Checkout { ...props }
                />
              ) }
            /> */}
          </Switch>
        
      </div>
    );
  }
}

export default App;

