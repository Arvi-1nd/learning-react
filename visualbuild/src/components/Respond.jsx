import React, { useState } from "react";

const Respond = () => {
    const [count,setCount] = useState(0);

    const handleSubmit=()=>{
        setCount(count + 1)
    }

    return(
        <button onClick={handleSubmit}>
            Clicked {count} times
        </button>
    )
}
export default Respond;
