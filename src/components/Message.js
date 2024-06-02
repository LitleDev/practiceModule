import React , {Component} from "react";


class Message extends Component {

    constructor () {
        super()
        this.state = {
            Message: 'Welcome Visitor'
        }
    }

    myFunction = () => {
        this.setState ({
            Message: 'This the set state in class component '
        })
    }

    render () {
        return (
            <div>
                <h1>
                    {this.state.Message}
                </h1>
                <button onClick={ () => this.myFunction() }> Subscribe !</button>
            </div>
        )
    }
}


export default Message;

