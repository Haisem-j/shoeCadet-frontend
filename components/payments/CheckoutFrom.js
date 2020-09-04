import React, { useState } from 'react';
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

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        let tEmail = {
            email: email
        }
        console.log(tEmail);

        const res = await fetch('http://localhost:5000/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(tEmail)
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
            console.log(result.error.message);
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Money in the bank!');
                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
            }
        }
    };

    return (
        <Card className={classes.root}>
            <div className={classes.titleTop}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Air Force 1
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Size {props.size}
                </Typography>
            </div>
            <Typography variant="h4" component="h2" className={classes.title2}>
                ${props.price}
            </Typography>
            <CardContent className={classes.content}>
                <TextField
                    label="Full Name"
                    margin='normal'
                    variant='outlined'
                    required
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
                    fullwidth
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
