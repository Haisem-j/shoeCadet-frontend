import { useEffect, useState, useRef } from 'react';
import fetch from 'isomorphic-unfetch';
import NavWrapper from '../components/NavWrapper';
import Card from '../components/card';
import Footer from '../components/footer';
import { URL_LINK } from '../globals'

function releases({ shoes }) {
    const caroselSlide = useRef(null);
    const card = useRef(null);
    const shoeCard = useRef(null);
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);


    useEffect(() => {
        setWidth(card.current.offsetWidth);
        caroselSlide.current.style.width = `${shoes.length}00%`;
    });

    const prevButton = () => {
        let trans = caroselSlide.current.style.transform;
        let temp = Number(trans.split('(')[1].split('p')[0]);
        if (count > 0) {
            caroselSlide.current.style.transition = "transform 0.4s ease-in-out";
            caroselSlide.current.style.transform = `translateX(${temp + width}px)`
            setCount(count - 1);
        }
    }

    const nextButton = () => {
        if (count < shoes.length - 1) {
            caroselSlide.current.style.transition = "transform 0.4s ease-in-out";
            caroselSlide.current.style.transform = `translateX(-${width * (count + 1)}px)`
            setCount(count + 1);
        }
        console.log(`In the nextButton function the count is now ${count}`);

    }

    return (
        <div className="total-container">
            <div className="release-nav">
                <NavWrapper />
            </div>
            <div className="releases">
                <h1>Up Coming Releases</h1>
                <div className="carosel-container" ref={card}>
                    <div className="carosel-slide " ref={caroselSlide}>
                        {shoes.map((shoe) => {
                            return <Card shoe={shoe} key={shoe._id} />
                        })}
                    </div>
                </div>
                <div className="ctrl-buttons" >
                    <div className="prev-btn c-btn" onClick={prevButton}>
                        Prev
                    </div>
                    <div className="next-btn c-btn" onClick={nextButton}>
                        Next
                    </div>
                </div>
            </div>
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDE8FF" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,85.3C480,75,600,117,720,149.3C840,181,960,203,1080,181.3C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <Footer />
            
        </div>
    )
}

releases.getInitialProps = async () => {
    const res = await fetch(`${URL_LINK}/shoes`);
    const shoes = await res.json();
    return {
        shoes
    }
}

export default releases;


