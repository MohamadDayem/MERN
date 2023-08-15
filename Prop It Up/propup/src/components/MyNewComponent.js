import React from 'react';
    
const MyNewComponent = (props) => {
    return (
        <div>
            <h1>
                My name is {props.firstName} {props.lastName} and my age is {props.age}Y/O and i'm {props.hairColor}
            </h1>
        </div>
    );
}
export default MyNewComponent;
