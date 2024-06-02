import React, {Component} from "react";


class Counter extends Component {

    constructor(props) {
        super(props)
        this.state =  {
            count : 0
        }
    
    }

    dcreament () {
        this.setState ({
            count: this.state.count - 1
        })
        console.log(this.state.count)
    }

    increament  () {
        // this.setState ({
        //     count: this.state.count + 1
        // })
        // or
        this.setState ( previousState => ({
            count : previousState.count + 1
        }))

        console.log(this.state.count)
    }

    render () {
        return (
            <div>
                <h1> Counter Component </h1>
                <button onClick={ () => this.dcreament() }>Decreament </button>
                <p>{this.state.count}</p>
                <button onClick={ () => this.increament()}>Increament</button>
            </div>
        )
    }
}


export default Counter;