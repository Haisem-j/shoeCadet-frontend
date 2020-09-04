import { useEffect, useState } from 'react';

function mobile() {
    return (
        <>
            <div className="heading-howItWorks">
                <h1>How It Works</h1>
                <img src="/bottom_arrow.png" alt="arrow" id="arrow" />
            </div>
            <div className="how-containers">
                <div className="item-container flex">
                    <img src="/pay.svg" alt="payment" id="item1" />
                    <div className="card">
                        <p>Purchase the correct slot for the specific product you want. </p>
                    </div>
                </div>
                <div className="item-container flex">
                    <img src="/email.svg" alt="form fill" id="item2" />
                    <div className="card">
                    <p>Check for a confirmation email. This email will contain an order number that you will need.</p>
                    </div>
                </div>
                <div className="item-container flex">
                    <img src="/test.svg" alt="test" id="item3" />
                    <div className="card">
                    <p>Open a ticket in discord including your order number. You will then recieve a form you need to fill out.</p>
                    </div>
                </div>
                <div className="item-container flex">
                    <img src="/shoe.svg" alt="email" id="item4" />
                    <div className="card">
                    <p>Wait for a response from the owner/staff. They will tell you if you got the shoe.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function desktop() {
    return (
        <>
            <div className="heading-howItWorks">
                <h1>How It Works</h1>

                <img src="/bottom_arrow.png" alt="arrow" id="arrow" />
            </div>

            <div className="how-containers">
                <div className="item-container flex">
                    <img src="/pay.svg" alt="payment" id="item1" />
                    <div className="card">
                        <p>Purchase the correct slot for the specific product you want. </p>
                    </div>
                </div>
                <div className="item-container flex">
                    <img src="/email.svg" alt="form fill" id="item2" />
                    <div className="card">
                        <p>Check for a confirmation email. This email will contain an order number that you will need.</p>
                    </div>
                </div>
                <div className="item-container flex">
                    <img src="/test.svg" alt="shoe" id="item3" />
                    <div className="card">
                        <p>Open a ticket in discord including your order number. You will then recieve a form you need to fill out.</p>
                    </div>
                </div>
                <div className="item-container flex">
                    <img src="/shoe.svg" alt="email" id="item4" />
                    <div className="card">
                        <p>Wait for a response from the owner/staff. They will tell you if you got the shoe.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function howItWorks() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    })
    return (
        <div className="howItWorks" id="howItWorks">
            {width <= 768 ? mobile() : desktop()}
        </div>
    )
}