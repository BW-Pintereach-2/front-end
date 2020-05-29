import React from "react";
import { useHistory } from "react-router-dom";
import FormContainer from "./FormStyled";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function( { setUser, form, onChange } )
{

  const history = useHistory();

  const onSubmit = e =>
  {
    //Validate -> using YUP!!!
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", form)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        history.push( "/articles" );
      })
      console.log("hi")
  }

  return(
    <FormContainer>
        <form onSubmit = { onSubmit } >
            <h1>Login</h1>
            <input type = "username" name = "username" placeholder = "Enter Username" value = { form.username } onChange = { onChange } />
            <input type = "password" name = "password" placeholder = "Enter Password" value = { form.password } onChange = { onChange } />
            <input type = "submit" value = "Log in" />
            <button onClick = { e => setUser( false ) } >Not a Member?</button>
        </form>
    </FormContainer>
  )
} 