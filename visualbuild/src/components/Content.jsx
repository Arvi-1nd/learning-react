import React from "react"
import styled from "styled-components";

let headingStyle = {
    backgroundColor: "brown",
    color:"green",
    boxShadow: "10px 10px 5px black"
}

let Button = styled.button
    `background-color: blue;
        color: white;
        width: 100px;
        height: 50px;
    `

let NewButton = styled(Button)
    `
        background-color: red;
        box-shadow: 10px 10px 10px black;
    `

const Content = () =>{

    function printSomething(){
        console.log("Hello")
     }
    function printSomething1(user){
        console.log("Hello", user)
    }
    return(
        <main>
            <h1 style={headingStyle}>Main Content</h1>
            <Button onClick={printSomething}> Click Me!</Button>
            <NewButton onClick={()=>{
                printSomething1("kesavan")
            }}> Duplicate</NewButton>
        </main>
    )
}

export  default Content;