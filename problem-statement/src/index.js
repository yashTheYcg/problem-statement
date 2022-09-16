import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import OrderState from './Context/Orders/OrderState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <OrderState>
    <App />
 </OrderState>
)