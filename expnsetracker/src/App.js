import React from 'react';
import './App.css';
import { Header } from './components/Header';
import {Balance} from './components/Balance';
import { IncomeExp} from './components/IncomeExp';
import { TransactionList } from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
// import AppReducer from './components/context/AppReducer';
import {GlobalProvider} from './components/GlobalState';



function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header />
      <Balance />
      <IncomeExp/>
      <TransactionList/>
      <AddTransaction/>
      {/* <AppReducer/> */}
    </div>
    </GlobalProvider>
  );
}

export default App;
