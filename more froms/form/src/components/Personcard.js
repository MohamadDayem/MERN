import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [usernameV,setUsernameV]=useState("");
    const[emailV,setEmailV]=useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            username: username, 
            email: email, 
            password: password 
        };
        console.log("Welcome", newUser);
    };

    const handelUserNmae=e=>{
        setUsername(e.target.value);
        if (e.target.value.length<1){
            setUsernameV("nameis reco");

        }
        else if (e.target.value.length<2){
            setUsernameV("name more");

        }
        else{setUsernameV("")}
    }
    const handelemal=e=>{
        setEmail(e.target.value);
        if(e.target.value.length<1){
            setEmailV("ukutemail");
        }
        else if (e.target.value.length<5){
            setEmailV("goodemal");
        }
        else(
            setEmailV("")
        )
    }
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text"  onChange={ (e) =>{setUsername(e.target.value); handelUserNmae(e)} }/>
                {
                    usernameV ? 
                  <p>{usernameV}</p> : 
                    ""
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text"  onChange={ (e) => {setEmail(e.target.value); handelemal(e) }} />
                {
                emailV ?
                <p>{emailV}</p> :
                ""
            }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

        name:{username}
        <br/>
        email:{email}
        password:{password}
        </>
    );
};
    
export default UserForm;
