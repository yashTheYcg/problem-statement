import React, { useContext, useState, useRef } from 'react'
import Order from './Order';
import order from '../order.json'
import { OrderContext } from '../Context/Orders/OrderState';



function UpdatedOrder(props) {

    const {phoneNumber,editNote} = useContext(OrderContext);
    const [currentorder, setcurrentOrder] = useState({ productID: "", productName: "", quantity: "", price: 0, address: "", tip: 0, expectedDate: "" });

    const ref = useRef(null);
    const refClose = useRef(null);

   

    const updateOrder= (currentOrder)=>{
        ref.current.click(); 
        setcurrentOrder({ productID: currentOrder.productID, productName: currentOrder.productName, quantity: currentOrder.quantity, price: currentOrder.price, address:currentOrder.address , tip: currentOrder.tip, expectedDate:currentOrder.expectedDate})
    }

    const handleClick = (e) => {
        editNote(currentorder.productID, currentorder.productName, currentorder.quantity, currentorder.price, currentorder.address, currentorder.tip, currentorder.expectedDate)
        refClose.current.click();
    }







    const myFunction = () => {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked === true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }




    return (

        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Order</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label" >Address</label>
                                    <textarea type="text" className="form-control" id="address" name='address' value={currentorder.address} rows="2" onChange={(e) => setcurrentOrder({ ...currentorder, [e.target.name]: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="myCheck" className='mx-2'>Give Tip  </label>
                                    <input type="checkbox" id="myCheck" onClick={myFunction} />

                                    <div id="text" style={{ display: "none" }}>
                                        <label htmlFor="tip" className='mx-2'>Enter Amount</label>
                                        <input type="number" id="tip" min="50" max="1000" name='tip' value={currentorder.tip} onChange={(e) => setcurrentOrder({ ...currentorder, [e.target.name]: e.target.value })} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={currentorder.address.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            {(phoneNumber === "1231231233") ?
          <div className='row my-3'>
            {order.map(order => {
              const time = new Date(order.expectedDate);
              return <Order key={order.productID} tip={order.tip} date={time} name={order.productName} quantity={order.quantity} price={order.price} updateOrder={updateOrder} address={order.address} order={order} />
            })}
          </div> 
          : 'No orders to display'}
        </>
    )
}

export default UpdatedOrder;