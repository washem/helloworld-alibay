import React, { Component } from 'react';
import './App.css';

export class Profile extends Component {


    
    render() {
        return  (
        <div>
            you are at profile
            <button>click to go to main</button>
        </div>
        )

    }

}
export default Profile;


// import React, { Component } from 'react';
// import './App.css';

// export class Profile extends Component {


//     newItem = () => {

//     };

//     soldItem = () => {

//     };

//     forSaleItem = () => {

//     };

//     history = () => {

//     };


//     render() {
//         if (this.props.profileState === true) {
//             return (
//                 <div className="profile">
//                     Profile Page
//                     <div>
//                         <div>
//                             <input placeholder="Search for item..." ref={r => this.input = r}></input>
//                             <button onClick={this.Search}>Search</button>
//                         </div>
//                         <button onClick={this.newItem}>Items - NEW</button>
//                         <button onClick={this.soldItem}>Items - SOLD</button>
//                         <button onClick={this.forSaleItem}>Items - FOR SALE</button>
//                         <button onClick={this.history}>Items - HISTORY</button>
//                     </div>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>empty</div>
//             )
//         }
//     }
// }
// export default Profile;






