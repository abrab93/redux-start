import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';


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
                <button onClick={() =>this.props.onStoreResult(this.props.ctr)}>Store</button>
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
        ctr: state.ctr.counter,
        storedResults: state.rs.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (val) => dispatch(actionCreators.add(val)),
        onSubstractCounter: (val) => dispatch(actionCreators.substract(val)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

export default connect(mapStatToProps, mapDispatchToProps)(Counter);