import React, { Component, useState } from 'react';
import fire from '../../config/Fire';
import './Tracker.css';
import Transaction from './Transaction/Transaction';
// import { getDatabase, ref, set, onValue, Database } from 'firebase/database'
// import { ref as sRef } from 'firebase/storage'

import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
} from 'firebase/firestore'
import db from '../../config/FireStore'

// const [val, setVal] = useState("");

// const backspace = () => {
//     try {
//         setVal(val.slice(0, -1))
//     } catch (error) {
//         setVal("")
//     }
// }

// const calculate = () => {
//     try {
//         setVal(eval(val));
//     } catch (error) {
//         setVal("Error");
//     }
// }



class Tracker extends Component {
    state = {
        transaction: [],
        money: 0,

        transactionName: '',
        transactionType: '',
        price: '',
        currentUID: fire.auth().currentUser.uid,
    }

    //logout
    logout = () => {
        fire.auth().signOut()
    }


    handleChange = (input) => (e) => {
        this.setState({
            [input]: e.target.value !== '0' ? e.target.value : '',
        })
    }

    //add transaction realtime
    addNewTransaction = () => {
        const { transactionName, transactionType, price, currentUID, money } = this.state
        //validasi
        if (transactionName && transactionType && price) {

            addDoc(collection(db, 'transaction'), {
                transactionName: transactionName,
                transactionType: transactionType,
                price: price,
                money: price,
                user_id: currentUID,
                timestamp: new Date(),
            })

            // .then((data) => {
            //     //success callback
            //     console.log(data)
            //     this.state({
            //         // transaction: BackUpState,
            //         money:
            //             transactionType === 'deposit'
            //                 ? money + parseFloat(price)
            //                 : money - parseFloat(price),
            //         transactionName: '',
            //         transactionType: '',
            //         price: '',
            //     })
            // })
            .catch((err) => console.error(err))
            // firebase 9
            //   set(sRef('Transactions/' + currentUID), {
            //     id: BackUpState.length + 1,
            //     name: transactionName,
            //     type: transactionType,
            //     price: price,
            //     user_id: currentUID,
            //   })
            // .then((data) => {
            //   //success callback
            //   console.log(data)
            //   this.state({
            //     transaction: BackUpState,
            //     money:
            //       transactionType === 'deposit'
            //         ? money + parseFloat(price)
            //         : money - parseFloat(price),
            //     transactionName: '',
            //     transactionType: '',
            //     price: '',
            //   })
            // })
            // .catch((error) => {
            //   //error
            //   console.log('error', error)
            // })
        } else {
            console.log(transactionName)
            console.log(transactionType)
            console.log(price)
        }
    }

    componentDidMount() {
        const { currentUID, money } = this.state
        let totalMoney = money

        const q = query(collection(db, 'transaction'), orderBy('timestamp', 'desc'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const list = []
            snapshot.docs.map((doc) => {

                // totalMoney =
                //   childSnapshot.val().type === 'deposit'
                //     ? parseFloat(childSnapshot.val().price) + totalMoney
                //     : totalMoney - parseFloat(childSnapshot.val().price)

                const data = doc.data()
                list.push({
                    id: doc.id,
                    name: data.transactionName,
                    type: data.transactionType,
                    price: data.price,
                    money: data.money,
                    user_id: currentUID,
                    timestamp: data.timestamp,
                })
            })
            console.log(list)
            this.setState({
                transaction: list,
            })
        })
        // onValue(dbRef, (snapshot) => {
        //   snapshot.forEach((childSnapshot) => {
        //     // fire.database().ref('Transactions/' + currentUID).once('value',
        //     //     (snapshot) => {
        //     // console.log(snapshot);
        //     // snapshot.forEach((childSnapshot) => {
        //     totalMoney =
        //       childSnapshot.val().type === 'deposit'
        //         ? parseFloat(childSnapshot.val().price) + totalMoney
        //         : totalMoney - parseFloat(childSnapshot.val().price)

        //     BackUpState.push({
        //       id: childSnapshot.val().id,
        //       name: childSnapshot.val().name,
        //       type: childSnapshot.val().type,
        //       price: childSnapshot.val().price,
        //       user_id: childSnapshot.val().user_id,
        //     })
        //   })

        // })
    }

    render() {
        var currentUser = fire.auth().currentUser
        console.log(fire.auth())

        return (
            // <div className="element">
            <div className="trackerBlock">
                <div className="welcome">
                    <span>Hi, {currentUser.username}!</span>

                    <button className="exit" onClick={this.logout}>
                        Exit
                    </button>
                </div>

                <div className="totalMoney">Rp.{this.state.money}</div>

                <div className="newTransactionBlock">
                    <div className="newTransaction">
                        <form>
                            <input
                                placeholder="Transaction Name"
                                type="text"
                                name="transaction"
                                value={this.state.transactionName}
                                onChange={this.handleChange('transactionName')}
                            />

                            <div className="inputGroup">
                                <select
                                    name="type"
                                    value={this.state.transactionType}
                                    onChange={this.handleChange('transactionType')}
                                >
                                    <option value="0">Type</option>
                                    <option value="expense">Expense</option>
                                    <option value="deposit">Deposit</option>
                                </select>

                                <input
                                    placeholder="Price"
                                    type="text"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleChange('price')}
                                />
                            </div>
                        </form>
                        <button
                            className="addTransaction"
                            onClick={() => this.addNewTransaction()}
                        >
                            + Add Transaction
                        </button>
                    </div>
                </div>

                <div className="latestTransactions">
                    <p>Latest Transactions</p>
                    <ul>
                        {Object.keys(this.state.transaction).map((id) => (
                            <Transaction
                                key={id}
                                type={this.state.transaction[id].type}
                                name={this.state.transaction[id].name}
                                price={this.state.transaction[id].price}
                            />
                        ))}
                    </ul>
                </div>
            </div>


            // </div>
        )
    }
}

export default Tracker;






// import React, { Component } from "react";
// import fire from "../../config/Fire";
// import './Tracker.css';
// import Transaction from './Transaction/Transaction';
// import { getDatabase, ref, set, onValue } from "firebase/database";
// // import { collection, addDoc, Timestamp } from 'firebase/firestore'

// class Tracker extends Component {

//     state = {
//         transaction: [],
//         money: 0,

//         transactionName: '',
//         transactionType: '',
//         price: '',
//         currentUID: fire.auth().currentUser.uid
//     }

//     //logout
//     logout = () => {
//         fire.auth().signOut();
//     }

//     // handleSubmit = async (e) => {
//     //     e.preventDefault()
//     //     try {
//     //         await addDoc(collection(db, 'Transaksi/'), {
//     //             money: money,
//     //             transactionName: transactionName,
//     //             transactionType: transactionType,
//     //             price: price,
//     //             completed: false,
//     //             created: Timestamp.now()
//     //         })
//     //         onClose()
//     //     } catch (err) {
//     //         alert(err)
//     //     }
//     // }

//     handleChange = input => e => {
//         this.setState({
//             [input]: e.target.value !== "0" ? e.target.value : ""
//         });
//     }

//     //add transaction realtime
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

//             // firebase 9
//             set(ref(BackUpState, 'Transactions/' + currentUID), {
//                 id: BackUpState.length + 1,
//                 name: transactionName,
//                 type: transactionType,
//                 price: price,
//                 user_id: currentUID
//                 // })
//                 // fire.database().ref('Transactions/' + currentUID).push({

//                 //     id: BackUpState.length + 1,
//                 //     name: transactionName,
//                 //     type: transactionType,
//                 //     price: price,
//                 //     user_id: currentUID

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

//     componentDidMount() {
//         const { currentUID, money } = this.state;
//         let totalMoney = money;
//         // const BackUpState = this.state.transaction;
//         const BackUpState = getDatabase();
//         const dbRef = ref(BackUpState, 'Transactions/');

//         onValue(dbRef, (snapshot) => {
//             snapshot.forEach((childSnapshot) => {

//                 // fire.database().ref('Transactions/' + currentUID).once('value',
//                 //     (snapshot) => {
//                 // console.log(snapshot);
//                 // snapshot.forEach((childSnapshot) => {
//                 totalMoney =
//                     childSnapshot.val().type === 'deposit' ?
//                         parseFloat(childSnapshot.val().price) + totalMoney
//                         : totalMoney - parseFloat(childSnapshot.val().price);

//                 BackUpState.push({
//                     id: childSnapshot.val().id,
//                     name: childSnapshot.val().name,
//                     type: childSnapshot.val().type,
//                     price: childSnapshot.val().price,
//                     user_id: childSnapshot.val().user_id,
//                 });
//             });
//             this.setState({
//                 transaction: BackUpState,
//                 money: totalMoney
//             })
//         });
//     }

//     render() {

//         var currentUser = fire.auth().currentUser;
//         console.log(fire.auth());

//         return (
//             <div className="element">
//                 <div className="trackerBlock">
//                     <div className="welcome">
//                         <span>Hi, {currentUser.username}!</span>

//                         <button className="exit" onClick={this.logout}>Exit</button>
//                     </div>

//                     <div className="totalMoney">Rp.{this.state.money}</div>

//                     <div className="newTransactionBlock">
//                         <div className="newTransaction">
//                             <form>
//                                 <input
//                                     placeholder="Transaction Name"
//                                     type="text"
//                                     name="transaction"
//                                     value={this.state.transactionName}
//                                     onChange={this.handleChange('transactionName')}
//                                 />

//                                 <div className="inputGroup">
//                                     <select name="type"
//                                         value={this.state.transactionType}
//                                         onChange={this.handleChange('transactionType')}>
//                                         <option value="0">Type</option>
//                                         <option value="expense">Expense</option>
//                                         <option value="deposit">Deposit</option>

//                                     </select>

//                                     <input
//                                         placeholder="Price"
//                                         type="text"
//                                         name="price"
//                                         value={this.state.price}
//                                         onChange={this.handleChange('price')}
//                                     />
//                                 </div>
//                             </form>
//                             <button
//                                 className="addTransaction"
//                                 onClick={() => this.addNewTransaction}>
//                                 + Add Transaction
//                             </button>
//                         </div>
//                     </div>

//                     <div className="latestTransactions">
//                         <p>Latest Transactions</p>
//                         <ul>
//                             {
//                                 Object.keys(this.state.transaction).map((id) => (
//                                     <Transaction key={id}
//                                         type={this.state.transaction[id].type}
//                                         name={this.state.transaction[id].name}
//                                         price={this.state.transaction[id].price}
//                                     />
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                 </div>

//                 <div>

//                 </div>
//             </div>
//         );
//     }
// }

// export default Tracker;