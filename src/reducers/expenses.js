// Expenses Reducer

const expensesReducerDefaultState = [];

//const expensesReducer = (state = expensesReducerDefaultState, action) => {
// Can either keep const name (expensesReducer) and add export default expensesReducer at bottom of file
// or remove const name (expensesReducer) and add export default to unnamed function

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => (expense.id !== action.id));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};
