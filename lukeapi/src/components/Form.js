import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [type,setType] = useState("people")
  const [id,setId] = useState(1)
  const navigate = useNavigate();
  const sendSurvey = (e) => {
    e.preventDefault();
    navigate(`${type}/${id}`);
    // do something with the data


  }
    
  return (
    <form onSubmit={ sendSurvey }>
      <label>Search For:</label>
     <select  onChange={(e) => setType(e.target.value) } >
        <option value={"people"}>People</option>
        <option value={"planet"}>Planets</option>
     </select>
      <input type="number"  onChange={(e) => setId(e.target.value)} /> 
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
