import React, {useState} from "react";
import styled from "styled-components";


let Button = styled.button
    `
        width: 150px;
        height: 50px;
        background-color: blue;
        color: white;
    `

const CounterApp = () => {

    let [count, setCount] = useState(0)
    let message;
    let remainingClick = 10 - count

    function handleIncrease() {
         setCount((prevCount)=>(prevCount + 1))
    }

    if (count < 10){
        message =(
            <div>
                <h3> You Clicked {count} times</h3>
                <p> Still  {remainingClick} more time to reach 10% discount</p>
            </div>
        )
    }
     else if (count === 10){
         message = (
             <div>
                 <h3>You Clicked {count} times</h3>
                 <p> You Unlocked a 10% discount </p>
             </div>
         )
    }
     else if (count < 20){
         message = (
             <div>
             <h3> You Clicked {count} times</h3>
             <p> You are a click Master Now !</p>
             </div>
         )

    }
    return(
        <div>
            <h1>
                Click To Unlock Rewards - { count }
            </h1>
            <Button onClick={ handleIncrease }> Click Me!</Button>
            {message}
            {/*{ count >=10 ?*/}
            {/*    (<p> You unlocked a 10% Discount</p>*/}
            {/*    ) : (*/}
            {/*        <p> Click 10 time to Unlock reward</p>*/}
            {/*    ) }*/}

            {/*{*/}
            {/*    count > 20 && <p> You're a click Master</p>*/}
            {/*}*/}


        </div>
    )
}

export default CounterApp;