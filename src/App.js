import React from 'react';
import './App.css';
import Home from './pages/Home';
// import * as api from './services/api';

function App() {
  // const productList = api.getProductsFromCategoryAndQuery('MLB5672').then((object) => object);

  return (
    <div>
      {/* {api.getCategories().then((categories) => { console.log(categories); })} */}
      <Home />
    </div>
  );
}

export default App;
