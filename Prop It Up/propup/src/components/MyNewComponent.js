import React, { useState } from 'react';
    
const MyNewComponent = (props) => {
    const [age, setAge] = useState(props.age)
    const handleClick = () => {
        setAge(age+1);
    }

    return (
        <div>
            <h1>
                My name is {props.firstName} {props.lastName} and my age is {age}Y/O and i'm {props.hairColor}
                <button onClick={ handleClick }>Click Me</button>
                
            </h1>
        </div>
    );
}
export default MyNewComponent;
