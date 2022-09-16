import { createContext, useState } from "react";

const OrderContext = createContext();
const OrderState = (props) =>{
    const host = "http://localhost:8080";


    const intitalOrder = [
        {
            "productID": "",
            "productName": "",
            "quantity": 0,
            "price": 0,
            "address": "",
            "tip": 0,
            "expectedDate": ""
        }
    ]

    const [order,setOrder] = useState(intitalOrder);

    const [phoneNumber, setPhoneNumber] = useState();


// sending the data for editing through editNote
    const editNote = async (productID, productName, quantity, price, address, tip, expectedDate) => {
        

        // TODO: API CALL
        const response = await fetch(`${host}/updatenote`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productID, productName, quantity, price, address, tip, expectedDate })
        });

        let newOrder = JSON.parse(JSON.stringify(order))
        console.log(newOrder);

        // logic to edit in client
        for (let index = 0; index < newOrder.length; index++) {
            const element = newOrder[index];
            if (element.productID === productID) {
                // element[index].productID =productID
                newOrder[index].productName = productName
                newOrder[index].quantity = quantity
                newOrder[index].price = price
                newOrder[index].address = address
                newOrder[index].tip = tip
                newOrder[index].expectedDate = expectedDate
                newOrder[index].price = price
                break;
            }
        }

        setOrder(newOrder);
    }


    return (
    <OrderContext.Provider value= {{phoneNumber,setPhoneNumber,editNote}}>
        {props.children}
    </OrderContext.Provider>
    )
}

export default OrderState;
export {OrderContext};