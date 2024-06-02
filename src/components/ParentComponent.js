import React, {Component} from "react";
import ChildComponent from "./ChildComponent";



class ParentComponent extends Component {

    constructor (props) {
        super(props)

        this.state = {
            parentName:'Parent/Father'
        }

        // binding state 
        this.greatParent = this.greatParent.bind(this);

    } 

    greatParent () {
        alert (`Helow parent ${this.state.parentName}`)
    }

    greatfromChild (childName) {
        alert (`Helow parent greating from ${childName}`)
    }


    render () {
        return (
            <div>
                <ChildComponent  greatHandler = {this.greatParent}  greetHandlerChild = {this.greatfromChild}/>
            </div>
        )
    }
}



export default ParentComponent ; 