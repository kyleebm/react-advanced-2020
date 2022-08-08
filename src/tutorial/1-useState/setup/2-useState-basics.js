import React, { useState } from 'react';

const UseStateBasics = () => {
  //console.log(useState('Hell World'));
  const [text, setText] = useState("rand title")
  
  const handleClick= () =>{
    if( text === 'rand title'){
    setText('hello world')
    }else{
      setText('rand title')
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className = 'btn' onClick ={handleClick}>
      change title
    </button>
    </React.Fragment>
};

export default UseStateBasics;
