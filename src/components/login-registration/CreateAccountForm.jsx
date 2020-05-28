import React from "react";
import { useHistory } from "react-router-dom";
import FormContainer from "./FormStyled";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export default function( { setUser, form, onChange } )
{
  const history = useHistory();

  const onSubmit = e =>
  {
    //Validate -> using YUP!!!
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", form)
      .then( res => {
        history.push( "/login" );
      })
      .catch(err => {
        console.log(err);
      })
  }

  return(
    <FormContainer>
        <form onSubmit = { onSubmit } >
            <h1>Create Account</h1>
            <input type = "text" name = "username" placeholder = "Enter username" value = { form.username } onChange = { onChange } />
            <input type = "email" name = "email" placeholder = "Enter Email" value = { form.email } onChange = { onChange } />
            <input type = "password" name = "password" placeholder = "Enter Password" value = { form.password } onChange = { onChange } />
            <input type = "submit" value = "Sign Up" />
            <button onClick = { e => setUser( true ) } >Already a Member?</button>
        </form>
    </FormContainer>
  )
}