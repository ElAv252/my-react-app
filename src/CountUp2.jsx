import React from 'react';

class CountUp2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }

    StateHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }
    render() {
        return (
            <React.Fragment>
                <p>{this.state.number}</p>
                <button onClick={this.StateHandler}>CountUp2</button>
            </React.Fragment>
        )
    }
};

export default CountUp2;