import React from "react";

function ChildComponent (props) {
    return (
        <div>
            <button  onClick={props.greatHandler}> Greate parent! </button>
            {/* to pass a parameter from child to parent using arroe function on;ly  */}
            <button  onClick={() => props.greetHandlerChild('child')}> Greate parent from child </button>
        </div>
    )
}


export default ChildComponent; 