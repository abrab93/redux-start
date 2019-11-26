import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: (new Date()).getTime(), value: action.result })
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