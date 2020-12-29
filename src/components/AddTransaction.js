import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    
    const [Text, setText] = useState('');
    const [Amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random()*100000000),
        Text,
        Amount
      }

      addTransaction(newTransaction);
    }



    return (
        <div>
          <h3>Add new transaction</h3>
          <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={Text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
                >
                <input type="number" value={Amount} onChange={(e) => setAmount(parseInt(e.target.value))} placeholder="Enter amount..." />
            </div>
            <button className="btn" onClick={addTransaction}>Add transaction</button>
          </form>
        </div>
    )
}
