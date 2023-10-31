import React, { useState } from 'react';
import { BasketContext } from './BasketContext';

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
