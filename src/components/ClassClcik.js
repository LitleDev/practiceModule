import React, { Component} from "react";


class ClassClick extends Component {

    constructor (props) {
        super(props) 
        this.state = {
            message: 'Hi', 
            text:"Hello"
        }
        // binding in class constructure 
        this.clickhandler = this.clickhandler.bind(this)
    }

    clickhandler() {
        console.log("Class event handler click button")
    }

    clickhandler_binding () {
        this.setState({
            message: "GoodBye !!"
        })
        console.log(this)
    }

    clickhandler_inprops () {
        this.setState({
            text: "Good night !!"
        })
        console.log(this)
    }

    clickhandler_arrow = () => {
        this.setState({
            text:'GG'
        })
    }

    render () {
        
        return (
            <div>
                <button  onClick={ this.clickhandler }> Click Me Iam Class Click !</button>
                <div> {this.state.message}</div>
                {/* <button  onClick={ this.clickhandler_binding.bind(this)  }> Onclick Bind Event Inline</button> */}
                <div>{this.state.text}</div>
                <button  onClick={ this.clickhandler_inprops }> Onclick Bind Event in class constructor</button>
                <div>{this.state.text}</div>
                <button  onClick={ this.clickhandler_arrow}> Onclick Bind Event usin arrow function</button>
            </div>
        ) 
    }
}


export default ClassClick;