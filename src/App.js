import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Sobre from './pages/Sobre';
import './App.sass';
import './App.css';
import Contacts from './pages/Contacts';
import Navbar from './Components/NavBar';
import DataProvider from './context/DataProvider';


class App extends React.Component {
  
  render() {
    return (
      <DataProvider>
        <div>
        <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home
                className="components"
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
                <Sobre
                className="components"
                { ...props }
                />
              ) }
            />
            <Route
              path="/Cardapio"
              render={ (props) => (
                <Menu 
                className="components"
                { ...props }
                />
              ) }
            />
            <Route
              path="/Contatos"
              render={ (props) => (
                <Contacts
                className="components"
                { ...props }
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
      </DataProvider>
      
    );
  }
}

export default App;

