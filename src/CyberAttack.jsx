import React from 'react';

class CyberAttack extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 1000 }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ number: this.state.number + 10 }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <p>{this.state.number}</p>
    }
};

export default CyberAttack;