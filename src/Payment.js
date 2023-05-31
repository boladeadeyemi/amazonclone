import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{basket, user}, dispatch ] = useStateValue();
    const history = useHistory();
    const handlePay = () => {
        const publicKey = 'pk_test_abd4fe48f4c43021b4bf83c38ee61e2a05bbd98e';
        const reference = `ref-${Math.floor(Math.random() * 10e8)}`;
        
        
        const handler = window.PaystackPop.setup({
          key: publicKey,
          email:user?.email,
          amount: getBasketTotal(basket) * 100,
          ref: reference,
          onClose: () => {
            console.log('Payment closed');
          },
          callback: (response) => {
            console.log(response);
          },
        });
        
        handler.openIframe();
        history.push('/orders')
      };

    
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
            <div className="payment__section">
                <div className='payment__title'>
                    <h3>Subtotal</h3>
                </div>
                <div className="payment__address">
                    <p>${getBasketTotal(basket)}</p>
                    <button onClick={handlePay} className='payment__right' >Pay Now</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Payment