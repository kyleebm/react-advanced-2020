import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers]= useState([])

const getUsers= async()=>{
  const response = await fetch(url);
  const users =await response.json();
  setUsers(users)
};
  useEffect(()=>{
    getUsers();
  },[])
  return <>
  <h3>Github Users</h3>
  <ul className="users">
  {users.map((user)=>{
    const{id,login,avatar_url,html_url} =user
    return<li key={id}>
      <img src={avatar_url} alt ={login}/>
      <div>
        <h4>{login}</h4>
      </div>

    </li>
  })}
  </ul>
  </>;
};

export default UseEffectFetchData;
