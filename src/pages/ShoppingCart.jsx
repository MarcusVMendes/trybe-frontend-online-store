import React from 'react';
import { Link } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import { FaBoxOpen } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      productAdd: localStorage.getItem('productAdd'),
    };

    this.renderProduct = this.renderProduct.bind(this);
  }

  renderProduct() {
    const { productAdd } = this.state;
    return (
      <>
        <p data-testid="shopping-cart-product-name">{ productAdd }</p>
        <span data-testid="shopping-cart-product-quantity">1</span>
      </>
    );
  }

  render() {
    const { productAdd } = this.state;
    return (
      <div>
        <Link to="/"><GiReturnArrow /></Link>
        <p>
          <AiOutlineShoppingCart />
          Carrinho de compras
        </p>
        <span><FaBoxOpen /></span>
        {
          !productAdd
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : this.renderProduct()
        }
      </div>
    );
  }
}

export default ShoppingCart;
