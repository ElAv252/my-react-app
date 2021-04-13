import React/*, { useState }*/ from 'react';
import Watch from './Watch';

class TodayTime2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { Time: Date.now() }
    }
    upTime() {
        this.setState({ Time: Date.now() })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.upTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <React.Fragment>
            <Watch milliseconds={this.state.Time} />
        </React.Fragment>
    }
}

export default TodayTime2;

/*function TodayTime2() {

    const [today, setToday] = useState(new Date())
     setInterval(() => { setToday(new Date()) }, 1000)
     return (
         <Watch milliseconds={today} />
     )
}

export default TodayTime2;*/