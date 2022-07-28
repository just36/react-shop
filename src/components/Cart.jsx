import React, { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
  const { order, handleBasketShow = Function.prototype } = useContext(
    ShopContext
  );

  const quantity = order.length;

  return (
    <div
      onClick={() => handleBasketShow()}
      className="cart blue darken-4 white-text"
    >
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="card-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
