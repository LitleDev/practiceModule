import React, { useContext } from "react";

import { CountContext } from "./Parent";

function ChildTwo () {

    const count = useContext(CountContext)

    return (
        <div>
            Component Two  {count}
        </div>
    )
}



export default ChildTwo ; 