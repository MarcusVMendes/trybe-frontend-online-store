import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductList.css';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
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
