import React, { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';
import { ItemsList } from './ItemsList';
import { Preloader } from './Preloader';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
  const {
    loading,
    setItems,
    order,
    isBasketShow,
    alertName,
    setLoading,
  } = useContext(ShopContext);

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.featured);
        setLoading();
      })
      .catch((reject) => {
        setLoading();
        console.error(reject);
      });
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <ItemsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
