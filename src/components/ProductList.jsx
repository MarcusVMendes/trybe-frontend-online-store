import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  // componentDidMount() {
  //   this.requestAPI();
  // }

  // requestAPI = async () => {
  //   const { query } = this.props;
  //   getProductsFromCategoryAndQuery(null, null)
  //     .then((object) => {
  //       this.setState({
  //         products: object.results,
  //       });
  //     });
  // }

  render() {
    const { products } = this.props;
    return (
      <div>
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
