import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('')
  const [isError, setIsError] = useState(false) 
   //const firstValue = text || 'hello world';
   //const secondValue = text && 'hello world';

  return <> 
    {/* <h2>{firstValue}</h2>;
    <button className='btn'>toggle error</button>
<h2>Value: {secondValue}</h2>*/}
    <h1>{text || 'john  doe'}</h1>
    <button className='btn' onClick={()=> setIsError(!isError)}>toggle error</button>
    {isError&&<h1>Error...</h1>}
    {isError ? (
      <h2>Error</h2>
      ): (
      <h2>awesome</h2>
    )}

    </>
};

export default ShortCircuit;
