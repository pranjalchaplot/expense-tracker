import './App.css';
import React from 'react'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Transactions } from './components/Transactions';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
      <IncomeExpenses />
      <Transactions />
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
