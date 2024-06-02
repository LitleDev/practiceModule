import React from "react";
import { useReducer } from "react";


const initailState = 0 


const reducer = ( state , action ) =>{
    switch (action) {
        case "Add":
            return state + 1; 
        case "Substract":
            return state - 1;
        case "Reset":
            return initailState ;
        default:
            return state;
    }
}

function CounterOne() {
    const [finalState , dispatch ] = useReducer(reducer , initailState)

    const clickhandler = (e) => {
        dispatch (e.target.value)
    }
    
    return (
        <div>
            Reducer ! 
            Counter = {finalState}
            <button onClick={ (e) => { dispatch(e.target.value)} } value={"Add"}>
                Add
            </button>

            <button onClick={ clickhandler } value={"Substract"}>
                Substark
            </button>
        </div>
    )
}


export default CounterOne ; 