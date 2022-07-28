import React, { createContext, useReducer } from 'react';
import { Reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  items: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(Reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DEC_QUANTITY', payload: { id: itemId } });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INC_QUANTITY', payload: { id: itemId } });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.setItems = (data) => {
    dispatch({ type: 'SET_ITEMS', payload: data });
  };

  value.setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
