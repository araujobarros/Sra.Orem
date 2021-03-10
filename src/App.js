import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import './App.sass';
import './App.css';
import Contacts from './pages/Contacts';
import Navbar from './Components/NavBar';
import DataProvider from './context/DataProvider';

function App() {
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
              path="/About"
              render={ (props) => (
                <About
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
  )
}
export default App;
