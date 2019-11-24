
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);// manipulate state immutably
            newState.counter = newState.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: (new Date()).getTime(), value: state.counter })
            }
        case 'DELETE_RESULT':
            // let newResults = [...state.results];
            // const index = state.results.findIndex(el => el.id === action.elemId);
            // newResults.splice(index, 1);
            // or we can use filter method, it gives back a copy of the array with elements where id != to the provided elemId

            const updatedResults = state.results.filter(el => el.id !== action.elemId);
            
            return {
                ...state,
                results: updatedResults
            }
        default: return state;
    }
    // return state; ^
}

export default reducer;