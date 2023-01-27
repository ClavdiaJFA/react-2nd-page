import { useState } from "react";
import {ButtonApp, ButtonReset } from "./";

export const Counter = ({initialValue = 0}) => {
    //console.log("Counter App");
    const[number, setnumber] = useState(initialValue);
    
    
    const increaseCounter = () => {
        setnumber(number +1);
        //console.log("+1", number)
    }
    const decreaseCounter = () => {
        setnumber(number -1);
        //console.log("-1", number)
    }
    const resetCounter = () => {
        setnumber(initialValue);
        //console.log(initialValue)
    }
return (
    <>
    <h2>Counter</h2>
    <h2> {number} </h2>
    <ButtonApp onClick={increaseCounter}>+</ButtonApp>
    <ButtonApp onClick={decreaseCounter} >-</ButtonApp>
    <ButtonApp onClick={resetCounter}>Reset</ButtonApp>
    <ButtonReset onClick={resetCounter} initialValue={50}>Reset at 50</ButtonReset>
    
    {/*<button onClick={increaseCounter}>+</button>*/}
    {/*<button onClick={decreaseCounter}>-</button>*/}
    {/*<button onClick={resetCounter}>Reset</button>*/}
    </>
)
}