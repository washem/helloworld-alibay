import React, { Component } from 'react';
import '../../../../App.css';
import SoldItem from './Items-Sold'

class SoldItemPage extends Component {
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
            .then(items =>items.itemsSold)
            .then(z=> {this.setState({products: z})})
    };
    
    renderProducts = () => {
        console.log("Current issue - ", this.state.products)
        const { products } = this.state
        if (products.length) {
            return products.map(item => {
                return <SoldItem
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

    deleteItem = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass id's to backend to store in cart uncomment when backend is ready
        fetch("/delteItem", {
            method: "POST",
            body: JSON.stringify(item),
          })
        .then(x=> x.text())
        .then(y=> JSON.parse(y))
        .then(lst=> this.setState({ products: lst }))
    };


    render() {
        return (
            <div>
                <h3>Items Sold</h3>
                <div>{this.renderProducts()}</div>
            </div>

        )
    }
}

export default SoldItemPage;