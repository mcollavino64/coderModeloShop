// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    
      <header>
        <NavBar></NavBar>
      </header>

      <Switch>
          <Route exact path="/">
              <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
              <ItemDetailContainer/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
