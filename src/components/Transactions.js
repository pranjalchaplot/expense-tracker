import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransComp } from './TransComp';


export const Transactions = () => {
    const {transactions} = useContext(GlobalContext)


    return (
        <>
         <h3>History</h3>
         <ul className="list">
            {transactions.map(transaction => (<TransComp key={transaction.id} transaction={transaction}/>  ))}
            
         </ul>
        </>
    )
}
