import React from "react";


function Person ({person_details}) {
    return (
        <div>
            <h2>
            Hi i am {person_details.name} , and i am {person_details.age} years OLD , i know {person_details.skill} !
            </h2>
        </div>
    )
}


export default Person