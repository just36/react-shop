export function Reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: payload || [],
      };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuatity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuatity,
            };
          } else {
            return el;
          }
        }),
      };
    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuatity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuatity >= 0 ? newQuatity : 0,
            };
          } else {
            return el;
          }
        }),
      };
    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
