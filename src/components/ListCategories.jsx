import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';
// import { getCategories } from './services/api' ;

class ListCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getCategories().then((object) => this.setState({
      categories: [...object],
    }));
  }

  handleClick(event) {
    console.log(event.target.value);
    getProductsFromCategoryAndQuery(event.target.value).then((object) => {
      this.setState({
        products: object.results,
      });
    });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div>
        {
          products.length === 0
            ? (categories
              .map(({ id, name }) => (
                <label htmlFor={ id } key={ id }>
                  <input
                    id={ id }
                    type="radio"
                    onClick={ this.handleClick }
                    value={ id }
                    data-testid="category"
                  />
                  { name }
                  <br />
                </label>
              )))
            : <ProductList products={ products } />
        }
      </div>
    );
  }
}

export default ListCategories;
