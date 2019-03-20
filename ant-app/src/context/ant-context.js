import React from 'react';

export default React.createContext({
  products: [
    { id: 'p1', title: 'React 16 Sticker + T-shirt', price: 29.99 },
    { id: 'p2', title: 'Vue.js T-shirt', price: 9.99 },
    { id: 'p3', title: 'Angular T-shirt', price: 8.99 },
    { id: 'p4', title: 'JS Notebook', price: 2.99 }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
