import React, { useState } from 'react';

function PersonDetails() {
    const [person, setperson] = useState({
        username: "guru",
        age:10
    });
  return <div><p>{person.username.filter()}</p></div>;
}

export default PersonDetails;
