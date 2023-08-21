import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";
// import '../CSS/style.css';
const Color = (props) => {
  
  return (
    <div style={{ display:'flex' } }>
      {   props.colors.map((box, i) => { 
        return (
          <>
       
              <div 
                style={{
                  backgroundColor: box,
                  width: "100px",
                  height: "100px",
                }}
              ></div>
            
            
          </>
        );
      })}
    </div>
  );
};

export default Color;
