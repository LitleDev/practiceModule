import React, { createContext } from "react";
import ChildOne from "./ChildOne";


export const CountContext = createContext()


function Parent () {
    return (
        <div>
            Parent Object !
            <hr/>
            <CountContext.Provider  value={ 1 }>
                Child Commnets
                <ChildOne></ChildOne>
            </CountContext.Provider>
        </div>
    )
}

export default Parent ; 