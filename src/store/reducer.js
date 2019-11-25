import * as actionTypes from '../store/actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);// manipulate state immutably
            newState.counter = newState.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBSTRACT :
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: (new Date()).getTime(), value: state.counter })
            }
        case actionTypes.DELETE_RESULT:
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