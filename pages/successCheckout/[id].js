import fetch from 'isomorphic-unfetch';
import { URL_LINK } from '../../globals';
import Router from 'next/router';
import {useEffect} from 'react';

const Success = ({ shoe }) =>{
    useEffect(()=>{
        setTimeout(() => {
            Router.push('/')
        }, 2000);
    })
    return(
        <div className="SuccessCheckout">
            <h1>Successfully purchased {shoe.title}!</h1>
            <h4>Check your email for further instructions.</h4>
        </div>
    )
}

Success.getInitialProps = async ({ query }) =>{
    const { id } = query
    //UPDATE THIS
    const res = await fetch(`${URL_LINK}/shoes/shoe/${id}`);
    const shoe = await res.json();
    return {
        shoe
    }
}
export default Success;