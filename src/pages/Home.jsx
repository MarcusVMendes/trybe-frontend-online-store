import React from 'react';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ListCategories from '../components/ListCategories';

// import * as api from './services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
    };
    this.getQueryValue = this.getQueryValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { query } = this.state;
    getProductsFromCategoryAndQuery(null, query)
      .then((object) => {
        this.setState({
          products: object.results,
        });
      });
  }

  getQueryValue(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const { products } = this.state;

    return (
      <div>

        <input
          type="text"
          data-testid="query-input"
          value={ query }
          onChange={ this.getQueryValue }
        />

        <ShoppingCartButton />

        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>

        {
          products.length === 0
            ? <p>Nenhum produto foi encontrado</p>
            : <ProductList products={ products } />
        }

        {/* { api.getCategories().then((categories) => console.log(categories)  )} */}
        <ListCategories />
      </div>
    );
  }
}

export default Home;
