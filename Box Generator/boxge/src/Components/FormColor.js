import React, { useState } from 'react';


const FormColor = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.settcolor(color);
        props.colors.push(color)
        console.log(props.colors);
    };



    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Color</h1>
            <input type='text' onChange={(e) => setColor(e.target.value)} value={color} />
            <input type="submit" value="Add Color" />
        </form>
    );
};

export default FormColor;