import React from 'react';
import { Link } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import { FaBoxOpen } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><GiReturnArrow /></Link>
        <p>
          <AiOutlineShoppingCart />
          Carrinho de compras
        </p>
        <span><FaBoxOpen /></span>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
