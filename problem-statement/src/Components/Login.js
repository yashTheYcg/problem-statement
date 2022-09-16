import React,{useContext,useState} from 'react'
import { OrderContext } from '../Context/Orders/OrderState';

const Login = (props) => {


  const {phoneNumber, setPhoneNumber} = useContext(OrderContext);

  const [currentNumber, setCurrentNumber] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneNumber(currentNumber);
    console.log(phoneNumber);
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Problem using React js</h2>
      <form method='POST' onSubmit={handleSubmit} >
        <div className="col-auto">
          <label htmlFor="phoneNumber" className="form-label mx-3">Enter the Phone Number</label>
          <input type="number" min="1000000000" max="9999999999" className="" id="phoneNumber" name='phoneNumber' value={currentNumber} onChange={(e) => setCurrentNumber(e.target.value)} />
          {<button className="btn-outline-dark mx-2">Submit</button>}
        </div>
      </form>
    </div>
  )
}

export default Login
