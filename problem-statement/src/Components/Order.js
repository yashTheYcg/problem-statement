import React from 'react'
import image from "../download.png";

function Order(props) {

  const { name, quantity, price, address, date, tip, order, updateOrder} = props;

  return (
    
    <div className='col-md-3 my-3 text-center'>
      
      <div className="card" style={{ width: "18rem", textAlign:"center" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name} <i className="fa-solid fa-pen-to-square mx-2" onClick={() => updateOrder(order)}></i></h4> 
          <p className="card-text">arriving at <strong>{date.getHours() + ":" + date.getMinutes() +","+ date.toDateString().replace("2022","") }</strong> </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Quantity : {quantity}</li>
          <li className="list-group-item">Price : {price}</li>
          <li className="list-group-item">Address : {address}</li>
          <li className="list-group-item">Tip : {tip}</li>
          
        </ul>
      </div>
    </div>
  )
}

export default Order
