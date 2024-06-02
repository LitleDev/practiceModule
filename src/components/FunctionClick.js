import React from "react";

function FunctionClcik () {

    function clickhandler () {
        console.log("Button has been clicked ! ")
    }


    return (
        <div>
            <button onClick={ clickhandler} > Clciked !</button>
        </div>
    )
}


export default FunctionClcik;