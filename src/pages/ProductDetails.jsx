import React from 'react';
import { Link } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';

// import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { location: { state: { title } } } = this.props;
    localStorage.setItem('productAdd', title);
  }

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
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleClick }
          >
            Adicionar ao Carrinho
          </button>

          <ShoppingCartButton />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  map: PropTypes.func,
}.isRequired;

export default ProductDetails;
