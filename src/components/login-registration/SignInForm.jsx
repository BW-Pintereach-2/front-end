import React from "react";
import { useHistory } from "react-router-dom";
import FormContainer from "./FormStyled";

export default function( { setUser, form, onChange } )
{

  const history = useHistory();

  const onSubmit = e =>
  {
    //Validate -> using YUP!!!
    e.preventDefault();
    history.push( "/articles" );
    console.log( "HELLO WORLD" );
    
  }

  return(
    <FormContainer>
        <form onSubmit = { onSubmit } >
            <h1>Create Account</h1>
            <input type = "email"    name = "email"    placeholder = "Enter Email"    value = { form.email     } onChange = { onChange } />
            <input type = "password" name = "password" placeholder = "Enter Password" value = { form.password  } onChange = { onChange } />
            <input type = "submit" value = "Sign Up" />
            <button onClick = { e => setUser( false ) } >Not a Member?</button>
        </form>
    </FormContainer>
  )
}