import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="card-list">
        {
          products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />
          ))
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  query: PropTypes.string,
}.isRequired;

export default ProductList;

// query 'MLB5672'
