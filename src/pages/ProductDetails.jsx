import React from 'react';
import { Link } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import PropTypes from 'prop-types';

// import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { title, thumbnail, price, attributes } } } = this.props;
    return (
      <div>
        <Link to="/"><GiReturnArrow /></Link>
        <div>
          <h2 data-testid="product-detail-name">{ title }</h2>
          <img src={ thumbnail } alt="" />
          <p>{ price }</p>
          <ul>
            {attributes.map((atribute, index) => (
              <li key={ index }>
                {atribute.name}
                {': '}
                {atribute.value_name}
              </li>))}
          </ul>
          <button type="button">Adicionar ao Carrinho</button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  map: PropTypes.func,
}.isRequired;

export default ProductDetails;
