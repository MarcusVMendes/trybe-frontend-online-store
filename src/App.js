import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={ShoppingCart} />
      <Route path="/details/:id" component={ProductDetails} />
    </Router>
  );
}

export default App;
