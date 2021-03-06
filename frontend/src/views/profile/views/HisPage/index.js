import React, { Component } from 'react';
import '../../../../App.css';
import '../../../../grid.css';
import HistoryItem from './Items-History'

class HisItemPage extends Component {
    constructor() {
        super()
        this.state = { 
            products: [],
            username: ""
         }
    };

    componentWillMount() {
        this.setState({ username: this.props.username });
    };

    componentDidMount() {
        console.log("ForSalePage test -", this.state.username)
        fetch("/profile", {
            method: 'post',
            body: JSON.stringify({ username: this.state.username })
        })
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(items =>items.itemsBought)
            .then(z=> {this.setState({products: z})})
    };
    

    renderProducts = () => {
        console.log("Current issue - ", this.state.products)
        const { products } = this.state
        if (products.length) {
            return products.map(item => {
                return <HistoryItem
                    imageName={item.imageName}
                    seller={item.seller}
                    productID={item.productID}
                    price={item.price}
                    blurb={item.blurb}
                    category={item.category}
                    title={item.title}
                />
            })
        } else {
            return <h4>No Products</h4>
        }
    };

    render() {
        return (
            <div>
                <h3 className='App'>Items Bought</h3>
                <div>{this.renderProducts()}</div>
            </div>

        )
    }
}

export default HisItemPage;