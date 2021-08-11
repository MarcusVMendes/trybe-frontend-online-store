import React from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';

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
      </div>
    );
  }
}

export default Home;
