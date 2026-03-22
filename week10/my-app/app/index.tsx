import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/StoreShop'; 
import TodoScreen from './screens/todoScreen'; 

export default function App() {
  return (
    <Provider store={store}> 
      {/* บรรทัดที่ 9: เรียกใช้ด้วยตัวใหญ่ให้ตรงกัน */}
      <TodoScreen />
    </Provider>
  );
}