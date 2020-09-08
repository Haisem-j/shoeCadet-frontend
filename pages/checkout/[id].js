import { useState } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import fetch from 'isomorphic-unfetch';
import { URL_LINK } from '../../globals';

import CheckoutForm from '../../components/payments/CheckoutFrom';

const promise = loadStripe("pk_test_51HKmaBD2ROsWPjNTmw5ZB4h8LJmUAO78b1iJ1N2smoBn039SSpWEfB7H2sA91AOahwqUv3z2xjGHx41AnQJxzY8X00XJekq1fL")

const Checkout = ({ shoe }) => {
    const router = useRouter();
    const [message, setMessage] = useState('');

    const childMessage = (m) => {
       setMessage(m)
    }

    const paymentMessage = () =>{
        if(message == 'IF'){
            return (
                <div className="message-fail">
                    Insufficient Funds Available
                </div>
            )
        }else if(message == 'DNE'){
            return (
                <div className="message-fail">
                    Something went wrong with the payment
                </div>
            )
        }
    }
    return (
        <div className="checkout">
            {message == '' ? null : paymentMessage()}
            <div className="stripe-payment">
                <Elements stripe={promise}>
                    <img src={`${URL_LINK}/shoes/${shoe.imageId}`} alt="temp" className="checkout-image" />
                    <CheckoutForm size={router.query.size} id={router.query.id} childMessage={childMessage} shoe={shoe} />
                </Elements>
            </div>
        </div>
    )
}

Checkout.getInitialProps = async ({ query }) => {
    const { id } = query
    //UPDATE THIS
    const res = await fetch(`${URL_LINK}/shoes/shoe/${id}`);
    const shoe = await res.json();
    return {
        shoe
    }
}

export default Checkout;
