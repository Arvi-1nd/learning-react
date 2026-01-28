import React, {useState} from "react";

const CounterApp = () => {

    let [count, setCount] = useState(0)
    function handleIncrease() {
         setCount += 1
        console.log( count )
    }

    function handleDecrease() {
        count -= 1
        console.log( count)
    }
    return(
        <div>
            <h1>
                Counter Application - {count}
                <button onClick={ handleIncrease }>Increase</button>
                <button onClick={ handleDecrease }>Decrease</button>
              </h1>
        </div>
    )
}

export default CounterApp;