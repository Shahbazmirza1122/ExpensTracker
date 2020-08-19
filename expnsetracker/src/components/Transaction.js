import React, {useContext} from 'react';
import { GlobalContext } from '../components/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';



    return (  
        // the code between the className is used for changing classes with js in css 
        // it means that if amount less then 0 then show minus otherwise show plus
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount) }</span>
            <button onClick = {() => deleteTransaction(transaction.id)} className = "delete-btn">x</button>
          </li>
    )
}
