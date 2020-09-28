import React, { useContext , useState} from 'react';
import {TransactionContext, addTransaction} from './transContext'

function Child() {
    let {transactions, addTransaction} = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        console.log(newDesc," ",  newAmount);
        addTransaction({
            
            amount : newAmount,
            desc : newDesc
        })
        
    }     
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
                                {console.log(transObj.desc," ",  transObj.amount)}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="transaction-form">
                <h3>Add New Transaction</h3>
                <hr />
                <form onSubmit={handleAddition}>
                <label>
                    Enter Description:
                <input type="text" placeholder="Enter Description ..." onChange={(ev) => setDesc(ev.target.value)} required />
                </label>
                <br />
                <label>
                    Enter Amount:
                <input type="number" placeholder="Enter Amount like (e.g: 1234...)" onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
                </form>
            </div>

        </div>
    );
}
export default Child;
