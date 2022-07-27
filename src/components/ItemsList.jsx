import React from 'react';
import { ItemUnit } from './ItemUnit';

function ItemsList(props) {
  const { items = [], addToBasket = Function.prototype } = props;

  if (!items.length) {
    return <h3>Nothing Here</h3>;
  }

  return (
    <div className="items">
      {items
        // убраем повторяющийся объект по свойству id из массива
        .reduce((acc, item) => {
          if (!acc.find((v) => v.id === item.id)) {
            acc.push(item);
          }
          return acc;
        }, [])
        .map((item) => {
          return <ItemUnit key={item.id} {...item} addToBasket={addToBasket} />;
        })}
    </div>
  );
}

export { ItemsList };
