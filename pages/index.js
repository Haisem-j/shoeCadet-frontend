import { useEffect, useState } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';

import NavWrapper from '../components/NavWrapper';
import LandingPage from '../components/landingPage';
import HowItWorks from '../components/howItWorks';
import FAQ from '../components/faq';
import Footer from '../components/footer';
export default function Home() {

  const [width, setWidth] = useState(0);
  let tl = new TimelineLite();

  useEffect(() => {
    setWidth(window.innerWidth);
    TweenMax.to('.landing-page', 0, { css: { visibility: 'visible' } })

    if (width >= 1200) {


      //Navbar Animation
      tl.from('#nav-anim', 1.4, { y: 50, opacity: 0, ease: Power3.easeInOut })

      //Image Animation
      tl.from('#bigShoe', 2, { y: 200, opacity: 0, ease: Power3.easeOut }, 'Start')

      // Content Animation
      tl.staggerFrom(['.c-anim1', '.c-anim2', '.c-anim3'], 1, {
        y: 44,
        opacity: 0,
        ease: Power3.easeOut,
        delay: .35
      }, .15, 'Start')
        .from('.c-anim4', 3, { y: 20, opacity: 0, ease: Power3.easeInOut }, 1);

      //Small arrow animation
      tl.from('#mouse-icon', 3, { y: 20, opacity: 0, ease: Power3.easeInOut }, 1.5)
    }
  });

  return (
    <div className="total-container">
      <div className="landing-page">
        <NavWrapper />
        <LandingPage />
      </div>

      {width > 768 ?
        <svg className="landing-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDE8FF" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,85.3C480,75,600,117,720,149.3C840,181,960,203,1080,181.3C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        : <svg className="landing-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDE8FF" fillOpacity="1" d="M0,32L80,80C160,128,320,224,480,229.3C640,235,800,149,960,106.7C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>}
      <HowItWorks />

      {width > 768 ?
        <svg className="howItWorks-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0362b0" fillOpacity="1" d="M0,192L40,176C80,160,160,128,240,149.3C320,171,400,245,480,277.3C560,309,640,299,720,277.3C800,256,880,224,960,192C1040,160,1120,128,1200,144C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        : <svg className="howItWorks-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0362b0" fillOpacity="1" d="M0,192L40,176C80,160,160,128,240,149.3C320,171,400,245,480,277.3C560,309,640,299,720,277.3C800,256,880,224,960,192C1040,160,1120,128,1200,144C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>}

      <FAQ />
      {width > 768 ?
        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDE8FF" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,85.3C480,75,600,117,720,149.3C840,181,960,203,1080,181.3C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        : <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDE8FF" fillOpacity="1" d="M0,32L80,80C160,128,320,224,480,229.3C640,235,800,149,960,106.7C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>}
      <Footer />
      
      <style jsx>{`
          .landing-svg {
            margin-top: -225px;
          }
          .howItWorks-svg{
            margin-top: -295px;
          }
		`}</style>
    </div>
  )
}
