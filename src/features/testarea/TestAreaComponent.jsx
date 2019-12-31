import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';

class TestAreaComponent extends Component {

    render() {
        const { data, incrementCounter, decrementCounter } = this.props
        return (
            <div>
                <h1>Test Area</h1>
                <p>The counter is: {data}</p>
                <Button onClick={incrementCounter} content="Increment" positive />
                <Button onClick={decrementCounter} content="Decrement" negative />
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ( {
    data: state.test.data
} )

const mapDispatchToProps = {
    incrementCounter, decrementCounter
}

export default connect( mapStateToProps, mapDispatchToProps )( TestAreaComponent );