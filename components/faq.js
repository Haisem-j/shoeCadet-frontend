import { useState, useEffect } from 'react';

export default function FAQ() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    })
    return (
        <div className="FAQ" id="FAQ">
            <div className="heading-faq">
                {width >= 768 ?
                    <>
                        <h1>Frequently Asked Questions</h1>
                        <h1 id="arrow-faq">___________</h1>
                    </>
                    :
                    <h1>FAQ</h1>
                }
            </div>
            <div className="questions-container">
                <div className="question-card">
                    <h3>Does this guarentee me a shoe?</h3>
                    <p>Purchasing a slot does not guarentee you a shoe! What it does do is gives you a much better chance at getting a shoe. Remember you are going up against thousands of other people.</p>
                </div>
                <div className="question-card">
                    <h3>How will I know when my order is ready?</h3>
                    <p>When you're order is ready you will recieve an email with instructions on how to proceed..</p>
                </div>
                <div className="question-card">
                    <h3>What happens once my shoe is purchased?</h3>
                    <p>Once your shoe is purchased, you will recieve an email with your order confirmation and receipt.</p>
                </div>
            </div>
            <h2>Don't see your question here? Ask us on discord!</h2>
        </div>
    )
}