export default (state, action) => {
        switch(action.type) {
            case 'DELETE_TRASACTIOIN':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !=
                action.payload)
            }
            case 'ADD_TRANSACTIOIN':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
            
        default: 
        return state;
    }
}