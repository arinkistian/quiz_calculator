import React, { Component } from "react";
import fire from "../../config/Fire";
// import './Tracker.css';
// import Transaction from './Transaction/Transaction';

class Tracker extends Component {

    // state = {
    //     transaction: [],
    //     money: 0,

    //     transactionName: '',
    //     transactionType: '',
    //     price: '',
    //     currentUID: fire.auth().currentUser.uid
    // }

    

    //logout
    logout = () => {
        fire.auth().signOut();
    }

//     handleChange = input => e => {
//         this.setState({
//             [input]: e.target.value !== "0" ? e.target.value : ""
//         });
//     }

//     //add transaction
//     addNewTransaction = () => {
//         const {
//             transactionName,
//             transactionType,
//             price,
//             money,
//             currentUID, 
//         } = this.state;

//         //validasi
//         if (transactionName && transactionType && price) {
//             const BackUpState = this.state.transaction;
//             BackUpState.push({
//                 id: BackUpState.length + 1,
//                 name: transactionName,
//                 type: transactionType,
//                 price: price,
//                 user_id: currentUID
//             });

//             fire.database().ref('Transactions/' + currentUID).push({
//             // fire.database().ref('Transactions/').push({
//                 id: BackUpState.length + 1,
//                 name: transactionName,
//                 type: transactionType,
//                 price: price,
//                 user_id: currentUID
//             }).then((data) => {
//                 //success callback
//                 console.log('succes callback');
//                 this.state({
//                     transaction: BackUpState,
//                     money: transactionType === 'deposit' ? money + parseFloat(price) : money - parseFloat(price),
//                     transactionName: '',
//                     transactionType: '',
//                     price: ''
//                 })
//             }).catch((error) => {
//                 //error
//                 console.log('error', error);
//             });
//         }
//     }

//     componentWillMount() {
//         const { currentUID, money } = this.state;
//         // const { money } = this.state;
//         let totalMoney = money;
//         const BackUpState = this.state.transaction;
//         fire.database().ref('Transactions/' + currentUID).once('value',
//         // fire.database().ref('Transactions/').once('value',
//             (snapshot) => {
//                 // console.log(snapshot);
//                 snapshot.forEach((childSnapshot) => {
//                     totalMoney =
//                         childSnapshot.val().type === 'deposit' ?
//                             parseFloat(childSnapshot.val().price) + totalMoney
//                             : totalMoney - parseFloat(childSnapshot.val().price);

//                     BackUpState.push({
//                         id: childSnapshot.val().id,
//                         name: childSnapshot.val().name,
//                         type: childSnapshot.val().type,
//                         price: childSnapshot.val().price,
//                         user_id: childSnapshot.val().user_id,
//                     });
//                 });
//                 this.setState({
//                     transaction: BackUpState,
//                     money: totalMoney
//                 })
//             });
//     }

    render() {

//         var currentUser = fire.auth().currentUser;
//         console.log(fire.auth());

        return ( <>
        <button onClick={this.logout}>Exit</button></>
//             <div className="trackerBlock">
//                 <div className="welcome">
//                     <span>Hi, {currentUser.username}!</span>
//                     <button className="exit" onClick={this.logout}>Exit</button>
//                 </div>
//                 <div className="totalMoney">Rp.{this.money}</div>

//                 <div className="newTransactionBlock">
//                     <div className="newTransaction">
//                         <form>
//                             <input
//                                 placeholder="Transaction Name"
//                                 type="text"
//                                 name="transaction"
//                                 value={this.state.transactionName}
//                                 onChange={this.handleChange('transactionName')}
//                             />

//                             <div className="inputGroup">
//                                 <select name="type">
//                                     value={this.state.transactionType}
//                                     onChange={this.handleChange('transactionType')}
//                                     <option value="0">Type</option>
//                                     <option value="expense">Expense</option>
//                                     <option value="deposit">Deposit</option>
//                                 </select>

//                                 <input
//                                     placeholder="Price"
//                                     type="text"
//                                     name="price"
//                                     value={this.state.price}
//                                     onChange={this.handleChange('price')}
//                                 />
//                             </div>
//                         </form>
//                         <button
//                             className="addTransaction"
//                             onClick={() => this.addNewTransaction}>
//                             + Add Transaction
//                         </button>
//                     </div>
//                 </div>

//                 <div className="latestTransactions">
//                     <p>Latest Transactions</p>
//                     <ul>
//                         {
//                             Object.keys(this.state.transaction).map((id) => (
//                                 <Transaction key={id}
//                                     type={this.state.transaction[id].type}
//                                     name={this.state.transaction[id].name}
//                                     price={this.state.transaction[id].price}
//                                 />
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </div>
        )
    }
}

export default Tracker;