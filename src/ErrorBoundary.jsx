import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
        console.log(info)
        console.log('ERROR!')
    }

    render() {
        if (this.state.hasError) {
            return <p>something went wrong</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary;