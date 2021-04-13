import React/*, { useState }*/ from 'react';

class CountUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { i: 0 }
    }

    stateHandler() {
        this.setState({ i: this.state.i + 1 })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.stateHandler(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return <span>{this.state.i}</span>
    }
}

export default CountUp;




/*function CountUp() {

    const [i, setI] = useState(0)

    setInterval(() => { setI(i + 1) }, 1000)
    return (
        <span > {i}</span >
    )
};
export default CountUp;*/