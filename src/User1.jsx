import React from 'react';

class User1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = { greeting: `hello ${this.props.name}` }
    }

    SetState(props) {
        this.setState({ greeting: `hello ${this.props.name}!!` })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.SetState(), 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <React.Fragment>
                <p>the name of user 1 is {this.props.name}</p>
                <p>{this.state.greeting}</p>
            </React.Fragment>
        )
    }
}

export default User1;