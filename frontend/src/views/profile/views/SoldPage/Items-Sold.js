import React, { Component } from 'react';
import '../../../../App.css';
import '../../../../grid.css';

export class SoldItem extends Component {

    render() {
        const { seller, price, title, blurb, imageName } = this.props// De-structuring
        return (
            <div>
                <h3 className='App'>Items Sold</h3>
                <div className='sold-item'>
                    <div>
                        <img src={imageName} alt='Product' className='imageDiv' />
                    </div>
                    <div>
                        {title}
                    </div>
                    <div>
                        {blurb}
                    </div>
                    <div>
                        {seller}
                    </div>
                    <div>
                        {price}
                    </div>
                </div>
            </div>
        )
    }
}

export default SoldItem;