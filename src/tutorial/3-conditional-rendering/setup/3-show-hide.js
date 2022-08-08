import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const[show,setShow] = useState(false)
  return(
  <>
   <button className ="btn" onClick={()=> setShow(!show)}>
    my button
  </button>
  {show && <Item />}
  </>
  );
};
  const Item= () => {
    const [size,setSize]=useState(window.innerWidth);
    const checkSize =()=>{
      setSize(window.innerWidth);
    };

    useEffect(()=>{
      window.addEventListener('resizes',checkSize);
      return ()=>{
        window.removeEventListener('resizes',checkSize);
      }
    },[])

    return <div style ={{marginTop:'2rem'}}>
      <h1>window</h1>
      <h2> size : {size} px </h2>
    </div>
  
};

export default ShowHide;
