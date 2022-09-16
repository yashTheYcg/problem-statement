import React from 'react';
import Login from './Components/Login';
// import Order from './Components/Order';
// import order from "./order.json"
import UpdatedOrder from './Components/UpdatedOrder'
function App() {



  return (
    <div className="container my-3">
      <Login />
      <div className='container my-5'>
        <h2>Recent Orders</h2>
        <UpdatedOrder/>
      </div>
    </div>
  );
}


export default App;
