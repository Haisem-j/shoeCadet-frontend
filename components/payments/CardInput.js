import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const cardStyle = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    }
};

export default function CardInput() {
    return (
        <CardElement options={cardStyle} />
    )
}