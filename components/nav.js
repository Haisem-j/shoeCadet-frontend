import React from 'react';
import Link from 'next/link'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            overlay: "0%"
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    componentDidMount() {
        this.setState({
            width: window.innerWidth
        })
    }

    desktop() {
        return (
            <>
                {this.props.pathname === '/' ?
                    <a href="#">
                        <img src="/shoe.png" alt="shoe logo" id="logo" />
                    </a>
                    :
                    <Link href="/">
                        <a>
                            <img src="/shoe.png" alt="shoe logo" id="logo" />
                        </a>
                    </Link>
                }
                <div className="links">
                    <ul>
                        <li>

                            {this.props.pathname === '/' ?
                                <a href="#howItWorks">
                                    <h4>How It Works</h4>
                                </a>
                                :
                                <Link href="/">
                                    <a>
                                        <h4>How It Works</h4>
                                    </a>
                                </Link>
                            }
                        </li>
                        <li>
                            {this.props.pathname === '/' ?
                                <Link href="/releases">
                                    <a>
                                        <h4>Purchase A Slot</h4>
                                    </a>
                                </Link>
                                :
                                <a href="#">
                                    <h4>Purchase A Slot</h4>
                                </a>
                            }
                        </li>
                        <li>
                            {this.props.pathname === '/' ?
                                <a href="#FAQ">
                                    <h4>FAQ</h4>
                                </a>
                                :
                                <Link href="/">
                                    <a>
                                        <h4>FAQ</h4>
                                    </a>
                                </Link>
                            }
                        </li>
                        <li>
                            <a href="#">
                                <img src="/discordLink.png" alt="discord link" id="discord" />
                            </a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    mobile() {
        return (
            <>
                {this.props.pathname === '/' ?
                    <a href="#">
                        <img src="/shoe.png" alt="shoe logo" id="logo" />
                    </a>
                    :
                    <Link href="/">
                        <a>
                            <img src="/shoe.png" alt="shoe logo" id="logo" />
                        </a>
                    </Link>
                }
                <img src="/bars-solid.svg" alt="mobil menu" id="menuLink" onClick={this.openNav} />
                <div id="myNav" className="overlay" style={{ height: this.state.overlay }}>
                    <a className="closebtn" onClick={this.closeNav}>&times;</a>
                    <div className="overlay-content">
                        {this.props.pathname === '/' ?
                            <a href="#howItWorks" onClick={this.closeNav}>
                                <h4>How It Works</h4>
                            </a>
                            :
                            <Link href="/">
                                <a onClick={this.closeNav}>
                                    <h4>How It Works</h4>
                                </a>
                            </Link>
                        }

                        {this.props.pathname === '/' ?
                            <Link href="/releases">
                                <a onClick={this.closeNav}>
                                    <h4>Purchase A Slot</h4>
                                </a>
                            </Link>
                            :
                            <a href="#" onClick={this.closeNav}>
                                <h4>Purchase A Slot</h4>
                            </a>
                        }

                        {this.props.pathname === '/' ?
                            <a href="#FAQ" onClick={this.closeNav}>
                                <h4>FAQ</h4>
                            </a>
                            :
                            <Link href="/">
                                <a onClick={this.closeNav}>
                                    <h4>FAQ</h4>
                                </a>
                            </Link>
                        }
                        <a href="#" onClick={this.closeNav}>
                            <img src="/discordLink.png" alt="discord link" id="discord-menu-mobile" />
                        </a>
                    </div>
                </div>

            </>
        )
    }

    openNav() {
        this.setState({
            overlay: "100%"
        })
        console.log(this.state);
    }
    closeNav() {
        this.setState({
            overlay: "0%"
        })
    }

    render() {
        console.log(this.props);

        if (this.state.width <= 768) {
            return (
                <nav id="nav-anim">
                    {this.mobile()}
                </nav>
            )
        } else {
            return (
                <nav id="nav-anim">
                    {this.desktop()}
                </nav>
            )
        }
    }
}

export default Nav;