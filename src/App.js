import './App.css';
import React from 'react'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Transactions } from './components/Transactions';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
      <IncomeExpenses />
      <Transactions />
      <AddTransaction/>
    </div>
  );
}

export default App;
