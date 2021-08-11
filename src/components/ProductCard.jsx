import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product" className="card-list">
        <div className="card-container">
          <h2 className="card-title">{ title }</h2>
          <img className="card-image" src={ thumbnail } alt={ title } />
          <p className="card-price">{ price }</p>
        </div>
      </div>
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
