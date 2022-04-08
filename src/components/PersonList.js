import React, { useState } from 'react';

function PersonList() {
    const [person, setperson] = useState([{
username:"Ajith",
agre:20
    
    },
{
    username:"vijay",
    age: 12
}]);
  return <div>
    {person.map((person,ind) => {
        return <p key={ind} >{person.username}</p>
    })}
  </div>
}
  
export default PersonList;
