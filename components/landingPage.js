import React from 'react';


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            display: ''
        }

        this.desktop = this.desktop.bind(this);
        this.mobile = this.mobile.bind(this);
        this.toggleArrow = this.toggleArrow.bind(this);
    }

    componentDidMount(){
        this.setState({
            width: window.innerWidth
        })
    }

    toggleArrow(){
        console.log('works?');
    }
    desktop() {
        return (
            <>
                <div className="landingContent">
                    <div className="text-content" >
                        <h1>
                            <div className="anim-content">
                                <div className="content-line c-anim1">Never Miss</div>
                            </div>
                            <div className="anim-content">
                                <div className="content-line c-anim2">A Drop</div>
                            </div>
                            <div className="anim-content">
                                <div className="content-line c-anim3">Again</div>
                            </div>
                        </h1>
                        <p className="c-anim4">Be ready for the next release by using the best tools available. </p>
                    </div>
                    <img src="/newShoe.png" alt="big shoe" id="bigShoe" />
                </div>
            </>
        )

    }
    mobile() {
        return (
            <>
                <div className="landingContent">
                    <img src="/newShoe.png" alt="big shoe" id="bigShoe-mobile" />
                    <h1>Never Miss</h1>
                    <h1>A Drop Again</h1>
                    <p>Be ready for the next release by using the best tools available.</p>
                </div>
            </>
        )
    }

    render() {
        return (
            <div className="content" >
                {this.state.width <= 768 ? this.mobile() : this.desktop()}
            </div>
        )
    }
}


export default LandingPage;