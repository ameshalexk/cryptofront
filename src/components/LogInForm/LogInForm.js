import React from "react";
import "./LogInForm.css";


function LogInForm(props) {
  return (
    <div class="loginform">
      <h2>Log In</h2>
      <form>
        
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={props.handleInput} />
        
      
          <label htmlFor="password">Password</label>
          <input type="text" name="password" onChange={props.handleInput} />
        
        <input value="Submit" type="submit" onClick={props.handleLogIn} />
      </form>
    </div>
  );
}

export default LogInForm;