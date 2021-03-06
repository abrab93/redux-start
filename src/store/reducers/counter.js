import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0,
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
        default: return state;
    }
    // return state; ^
}

export default reducer;