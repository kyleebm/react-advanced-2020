import React from 'react';

const ErrorExample = () => {
  let title ='random title';
  const handleClick = () => {
    console.log(title);
    title ='hello people'
  }
  return (
  <React.Fragment>
  <h2>{title}</h2>
  <button type="button" className= 'btn' onClick = {handleClick}>Chkange Title</button>
  </React.Fragment>
  )
};

export default ErrorExample;
