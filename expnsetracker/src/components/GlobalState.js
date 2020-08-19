import React, {createContext, useReducer } from 'react';
import AppReducer from './context/AppReducer';   






// creating state
const initialState = {
    transactions: [
                    { id: 1, text: 'Flower', amount: -20 },
                    { id: 2, text: 'Salary', amount: 300 },
                    
    ]
}

//  creating context now
export const GlobalContext = createContext(initialState);

// creating provider now
export const GlobalProvider = ({children}) => {

const [state, dispatch] = useReducer(AppReducer, initialState);

                                            function deleteTransaction(id) {
                                                dispatch({
                                                    type: 'DELETE_TRASACTIOIN',
                                                    payload: id
                                                });
                                            }


                                            function addTransaction(transaction) {
                                                dispatch({
                                                    type: 'ADD_TRANSACTIOIN',
                                                    payload: transaction 
                                                });
                                            }


return (<GlobalContext.Provider value = {{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
    }}>

{children}

</GlobalContext.Provider>
)

    
}  