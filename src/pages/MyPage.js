import React, { useEffect, useState } from "react";



function MyPage () {

    const [count , setCount] = useState(0);


    // const clickhandler = () => {
    //     setCount( count + 1)
    // }

    useEffect ( ()=> {
        setTimeout( () => { setCount(count + 1)} , 1000) 
    },[])
    return (
        <div>
            
            <button onClick={ () => setCount(count + 1)}  > Increase </button>
            {count}
            <button onClick={ ()=> setCount(count - 1)}  > Decrease </button>
        </div>
    )
}


export default MyPage; 