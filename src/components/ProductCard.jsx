import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import { BrowserRouter } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { product } = this.props;
    localStorage.setItem('productAdd', product.title);
  }

  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <BrowserRouter>
        <div data-testid="product" className="card-list">
          <div className="card-container">
            <h2 className="card-title">{ title }</h2>
            <img className="card-image" src={ thumbnail } alt={ title } />
            <p className="card-price">{ price }</p>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ this.handleClick }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
