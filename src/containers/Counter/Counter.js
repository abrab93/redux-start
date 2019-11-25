import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubstractCounter(5)} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store</button>
                <ul>
                    {this.props.storedResults.map(storedResult => (
                        < li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>)
                    )}
                </ul>
            </div >
        );
    }
}

const mapStatToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: (val) => dispatch({ type: 'ADD', value: val }),
        onSubstractCounter: (val) => dispatch({ type: 'SUBSTRACT', value: val }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', elemId: id }),
    };
};

export default connect(mapStatToProps, mapDispatchToProps)(Counter);