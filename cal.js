import React from 'react';
import Keypad from './Keypad.js';

import { useState } from 'react';



function App()
{
    let[input,setInput]=useState("")
    function handleClick(value){
      setInput(input+value)
    }
    function handleCal(value){
        let p=eval(input)
        setInput(p)
    }
    function handleClear(){
        setInput("")
    }
    
    return(
        <div className="background-image">
        <div className="abc">
            <h1 className="nnn">calculator app</h1>
            <div>
            <input type="text" value={input} className="aaa" />
            <Keypad  handleClick={handleClick} handleCal={handleCal} handleClear={handleClear}/>
            
        </div>
        </div>
        </div>
    )
}
export default App;