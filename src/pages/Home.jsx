import React from 'react';
import ShoppingCartButton from '../componentes/ShoppingCartButton';
import ListCategories from '../componentes/ListCategories';
// import * as api from './services/api';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" name="" id="" />
        <ShoppingCartButton />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* { api.getCategories().then((categories) => console.log(categories)  )} */}
        <ListCategories />
      </div>
    );
  }
}

export default Home;
