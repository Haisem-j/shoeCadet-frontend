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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas.</p>
                </div>
                <div className="question-card">
                    <h3>How will I know when my order is ready?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas.</p>
                </div>
                <div className="question-card">
                    <h3>What happens once my shoe is purchased?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas.</p>
                </div>
            </div>
            <h2>Don't see your question here? Ask us on discord!</h2>
        </div>
    )
}