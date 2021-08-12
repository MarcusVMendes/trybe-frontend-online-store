import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductList.css';

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
    const { product } = this.props;
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <div>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: product,
          } }
          data-testid="product-detail-link"
        >
          <div data-testid="product" className="card-list">
            <div className="card-container">
              <h2 className="card-title">{ title }</h2>
              <img className="card-image" src={ thumbnail } alt={ title } />
              <p className="card-price">{ price }</p>
            </div>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
      //     </div>
      // </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
