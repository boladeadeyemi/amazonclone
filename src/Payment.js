import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{basket, user}, dispatch ] = useStateValue();
    const history = useHistory();

        //generate the special stripe secret which allows us to charge the customer


  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout (
                    <Link to = "/checkout">{basket?.length} items</Link>
                        )
            </h1>
            <div className="payment__section">
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 Bolade Lane</p>
                    <p>Lagos, Nigeria</p>
                </div>
            </div>
            {/* section two */}
            <div className="payment__section">
                <div className='payment__title'>
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item =>(
                        <CheckoutProduct
                        id= {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            </div>
            
            <div className="checkout__right">
            <p>Subtotal:  N{getBasketTotal(basket)}</p>
            <button onClick={ () => history.push("/review")}>Proceed to Review</button>
        </div>
        </div>
    </div>
  )
}

export default Payment