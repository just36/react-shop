function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;

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
