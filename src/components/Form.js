import React ,{Component} from "react";

class Form extends Component {

    constructor (props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
    }

    onChangeHandler = (event) => {
        this.setState ({
            username: event.target.value
        })
    }

    commentHandler = (event) => {
        this.setState(
            {
                comment:event.target.value
            }
        )
    }

    topicHandler = (event) => {
        this.setState(
            {
                topic:event.target.value
            }
        )
    }


    onSubmitHandler = (event) => {
        alert(`${this.state.username}  ${this.state.comment} ${this.state.topic} `)
        event.preventDefault()
    }


    render () {
        return (
            // destructuring the states
            //  const { username , comment , topic} = this.state 
            //  will call the the values we will not reuire the `this.state.<varibale >`
            // we can call it directly 
            <form onSubmit={ this.onSubmitHandler}>
                <div>
                    Form Component !
                    <label> UserName</label>
                    <input type="text" value={this.state.username} onChange={this.onChangeHandler} />
                </div>
                <div>
                    <label>Commnets </label>
                    <textarea type = "text" value = {this.state.comment} onChange={this.commentHandler} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic}  onChange={this.topicHandler}>
                        <option value='react' >ReactJs</option>
                        <option value='node' >NodeJs</option>
                        <option value='mongo' >MongoDB</option>
                    </select>
                </div>
                <button type="submit"> Submit </button>
            </form>
            
        )
    }
}


export default Form;

