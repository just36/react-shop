import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

function Alert() {
  const { alertName: name = '', closeAlert = Function.prototype } = useContext(
    ShopContext
  );

  useEffect(() => {
    const timerAlert = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerAlert);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}

export { Alert };
