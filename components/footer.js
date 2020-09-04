import { useState, useEffect } from 'react';

export default function footer() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    })

    return(
        <div className="footer">
            <img src='/shoe.png' alt="logo" id="footer-logo"/>

            <div className="contact-us">
                <h3>Contact Us</h3>
                <h4>Email: shoecadet.ca@gmail.com</h4>
                <h4>Discord: <a href="#">Click Here</a></h4>
            </div>
        </div>
    )
}