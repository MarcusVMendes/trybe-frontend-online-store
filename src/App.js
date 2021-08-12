import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/cart" component={ ShoppingCart } />
      <Route path="/details/:id" component={ ProductDetails } />
    </BrowserRouter>
  );
}

export default App;
