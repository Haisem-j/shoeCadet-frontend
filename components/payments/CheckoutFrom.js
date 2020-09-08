import React, { useState, useEffect } from 'react';
import Router from 'next/router';

//Stripe
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

//Custom components
import CardInput from './CardInput';

//Global Variable
import { URL_LINK } from '../../globals'

//Util imports
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: '30vw',
        height: '50vh'
    },
    title: {
        marginLeft: '17px',
        marginRight: '17px',
        marginTop: '20px'
    },
    title2: {
        marginLeft: '17px',
        marginBottom: '-20px'
    },
    titleTop: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    button: {
        margin: '2em auto 1em',
        // width: '10vw'
    },
    textBt: {
        // marginBottom: '20px'
    },

});

export default function CheckoutForm(props) {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loadTimer, setLoadTimer] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        setTimeout(() => {
            setLoadTimer(false);
        }, 1000);
    })
    const handleSubmit = async (event) => {
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        let reqBody = {
            email: email,
            name: name,
            shoe: props.shoe
        }

        const res = await fetch(`${URL_LINK}/payment/pay`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(reqBody)
        })

        let data = await res.json();

        const result = await stripe.confirmCardPayment(data.client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email
                },
            }
        });

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result);
            console.log(result.error.message);
            if (result.error.decline_code === 'insufficient_funds') {
                props.childMessage('IF')
            } else {
                props.childMessage('DNE')
            }
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                Router.push(`/successCheckout/${props.id}`)
                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
            }
        }
    };

    if (loadTimer) {
        return (
            <>
            </>
        )
    } else {


        return (
            <Card className={classes.root}>
                <div className={classes.titleTop}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.shoe.title}
                </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Size {props.size}
                    </Typography>
                </div>
                <Typography variant="h4" component="h2" className={classes.title2}>
                    ${props.shoe.price}
                </Typography>
                <CardContent className={classes.content}>
                    <TextField
                        label="Full Name"
                        margin='normal'
                        variant='outlined'
                        required
                        onChange={e => {
                            setName(e.target.value)
                        }}
                    />
                    <TextField
                        className={classes.textBt}
                        label="Email"
                        id='outlined-email-input'
                        helperText={`Your receipt will be sent to this email`}
                        margin='normal'
                        variant='outlined'
                        type='email'
                        required
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                    <CardInput />
                    <div className={classes.div}>
                        <Button variant="contained" color="primary" fullWidth className={classes.button} onClick={handleSubmit}>
                            Pay
                    </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }
}
