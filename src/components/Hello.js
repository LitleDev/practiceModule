import React from "react";

const Hello = (props) => {
    return (
        <div>
            <p>Hellow {props.name}</p>
            <p>Your Hero Character is  {props.heroName}</p>
            <p>{props.children}</p>

        </div>
    )
    //or we can using the below 

    //return React.createElement('div', null , 'Hello Suvit ');
}


export default Hello ;