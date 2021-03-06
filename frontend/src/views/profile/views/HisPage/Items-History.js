import React, { Component } from 'react';
import '../../../../App.css';
import '../../../../grid.css';

export class HistoryItem extends Component {

    render() {
        const { seller, price, title, blurb, imageName } = this.props// De-structuring
        return (
            <div>
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
export default HistoryItem;
