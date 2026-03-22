import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/StoreShop'; 
import TodoScreen from './screens/todoScreen'; 
import ShoppingCart from './screens/ShopScreen'; 

export default function App() {
  return (
    <Provider store={store}> 
      
      <TodoScreen/>
    </Provider>
  );
}