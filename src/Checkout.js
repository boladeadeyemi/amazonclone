import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer'

function Checkout() {
    const [{basket, user}, dispatch ] = useStateValue();
    const history = useHistory();
  return (
    <div className='checkout'>
        <div className="checkout__left">
                <img classname= "checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

            <div>
              <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">
                Your shopping basket</h2>

              {basket.map(item => (
                <CheckoutProduct
                id= {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                />

              ))}
                {/* CheckoutProduct */}
                {/* CheckoutProduct  */}
                {/* CheckoutProduct  */}
                {/* CheckoutProduct  */}
        </div>
        </div>

        <div className="checkout__right">
            <p>Subtotal:  N{getBasketTotal(basket)}</p>
            <button onClick={ () => history.push("/review")}>Proceed to Review</button>
        </div>
        {/* <div className="payment__section">
              <button onClick={handlePay}>PAY NOW</button>
         </div> */}
       
    </div>
  )
}

export default Checkout