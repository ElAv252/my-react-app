import React/*, { useState }*/ from 'react';

class CountDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { i: this.props.count }
    }

    stateHandler() {
        this.setState({ i: this.state.i - 1 })
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.props.count !== 0) {
                this.stateHandler()
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return <span>{this.state.i}</span>
    }
}

export default CountDown;

/*function CountDown(props) {

    const [count, setNum] = useState(props.count)

    setInterval(() => {
        if (count !== 0) {
            setNum(count - 1)
        }
    }, 1000)

    return (
        <span>{count}</span>
    )
};

export default CountDown; */