import React from "react";

import "./SignUpForm.css";

function SignUpForm(props) {
  return (
    <div class="signupform">
      <h2>Sign Up</h2>
      <form>
        
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={props.handleInput} />
        
        
          <label htmlFor="password">Password</label>
          <input type="text" name="password" onChange={props.handleInput} />
        
        <input value="Submit" type="submit" onClick={props.handleSignUp} />
      </form>
    </div>
  );
}

export default SignUpForm;
