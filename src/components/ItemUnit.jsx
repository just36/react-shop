import React from 'react';

function ItemUnit(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img
          src={full_background}
          alt={name}
          // broken image processing
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400/FF0000/FFFFFF?text=${name}`;
          }}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ id, name, price })}
        >
          Купить
        </button>
        <span className="right price">{price} руб.</span>
      </div>
    </div>
  );
}

export { ItemUnit };
