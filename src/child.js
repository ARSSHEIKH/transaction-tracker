import React, { useContext } from 'react';
import {TransactionContext} from './transContext'

function Child() {
    let {transactions} = useContext(TransactionContext);
    
    return (
        <div className="main-container">
            <h1 className="main-header-text">Expence Tracker</h1>
            <h3>Your Balance <br />$260.00</h3>

            <div className="expence-container">
                <h3>INCOME <br />$500.00</h3>
                <h3>EXPENCE <br />$240.00</h3>
            </div>

            <div className="history-container">
                <h3>History</h3>
                <hr /><br />
                <ul className="history-list">
                    {transactions.map((transObj, ind) => {
                        return (
                            <li key={ind}>
                                <span>{transObj.desc} </span>
                                <span>{transObj.amount}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="transaction-form">
                <h3>Add New Transaction</h3>
                <hr />
                <label>
                    Enter Description:
                <input type="text" placeholder="Enter Description ..." required />
                </label>
                <br />
                <label>
                    Enter Amount:
                <input type="number" placeholder="Enter Amount like (e.g: 1234...)" required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </div>

        </div>
    );
}
export default Child;
