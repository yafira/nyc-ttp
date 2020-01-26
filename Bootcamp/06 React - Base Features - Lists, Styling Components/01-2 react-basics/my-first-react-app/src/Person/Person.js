import React from 'react';
import './Person.css';

// Stateless component, no internal logic
const person = (props) => {
    
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/* {Math.floor(Math.random()* 30)} repalced with {props.age} */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )

  };


export default person; 

