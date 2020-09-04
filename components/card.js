import React from 'react';
import Link from 'next/link'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            width: window.innerWidth,
            sizeSelected: this.props.shoe.size[0]
        })
    }

    handleChange(e){
        const targetValue = e.target.value;
        this.setState({
            sizeSelected: targetValue
        })
    }

    desktop() {
        return (
            <>
                <div className="card">
                    <div className="info-release">
                        <div className="info-top">
                            <h2>{this.props.shoe.title}</h2>
                            <div className="price-container">
                                <h4>Price</h4>
                                <p>${this.props.shoe.price}</p>
                            </div>
                            <div className="sizes">
                                <h4>Size:</h4>
                                <div className="sizes-container">
                                    <select id="sizes" name="sizes" onChange={this.handleChange}>
                                        {this.props.shoe.size.map((item) => {
                                            return <option value={item} key={item}>{item}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="info-bottom">
                            <h4>Description</h4>
                            <p>{this.props.shoe.description}</p>
                            <Link href={{ pathname: `/checkout/${this.props.shoe._id}`, query: { size: this.state.sizeSelected } }}  >
                                <div className="add-bag">
                                    CHECKOUT
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="picture-release">
                        <img src={`http://localhost:5000/api/shoes/${this.props.shoe.imageId}`} alt={this.props.shoe.title} />
                    </div>
                </div>
            </>
        )
    }

    mobile() {
        return (
            <>
                <div className="card">
                    <h2 className="shoe-title-release">{this.props.shoe.title}</h2>
                    <div className="picture-release">
                        <img src={`http://localhost:5000/api/shoes/${this.props.shoe.imageId}`} alt={this.props.shoe.title} />
                    </div>
                    <div className="info-top">
                        <div className="price-container">
                            <h4>Price</h4>
                            <p>${this.props.shoe.price}</p>
                        </div>
                        <div className="sizes">
                            <h4>Size:</h4>
                            <div className="sizes-container">
                                <select id="sizes" name="sizes">
                                    {this.props.shoe.size.map((item) => {
                                        return <option value={item} key={item}>{item}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="info-bottom">
                        <h4>Description</h4>
                        <p>{this.props.shoe.description}</p>
                        <Link href={{pathname: `/checkout/${this.props.shoe._id}`, query: {size: this.state.sizeSelected}}}  >
                                <div className="add-bag">
                                    CHECKOUT
                            </div>
                            </Link>
                    </div>
                </div>
            </>
        )
    }


    render() {
        console.log(this.state);
        return (
            <>
                {this.state.width <= 768 ? this.mobile() : this.desktop()}
            </>
        )
    }
}

export default Card;