import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormContainer from "./FormStyled";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { createAccountForm } from "../../utils/formSchema";
import * as yup from "yup";

export default function( { setUser, form, setForm } )
{
  const history = useHistory();
  const [ errorMessage, setErrorMessage ] = useState( { username : false, email : false, password : false } );

  const onChange = e => 
  {
    const name = e.target.name;
    const value = e.target.value;

    setForm( { ...form, [ name ] : value } );
    
    yup.reach( createAccountForm, name )
         .validate( value )
         .then( response =>
          {
            setErrorMessage( { ...errorMessage, [ name ] : true } )
          } )
         .catch( response =>
          {
            setErrorMessage( { ...errorMessage, [ name ] : false } )
          } )
  }

  const onSubmit = e =>
  {
    e.preventDefault();

    if( errorMessage[ "username" ] && errorMessage[ "email" ] && errorMessage[ "password" ] )
    {
      axiosWithAuth()
        .post( "/api/auth/register", form )
        .then( res => 
        {
          history.push( "/login" );
        } )
        .catch( err => 
        {
          console.log( err );
        } )
    }
    else
    {
      alert( "Error: Please Provide Valid Information" );
    }
  }

  return(
    <FormContainer>
        <form onSubmit = { onSubmit } >
            <h1>Create Account</h1>
            <input type = "text" name = "username" placeholder = "Enter Username" value = { form.username } onChange = { onChange } />
            <input type = "email" name = "email" placeholder = "Enter Email" value = { form.email } onChange = { onChange } />
            <input type = "password" name = "password" placeholder = "Enter Password" value = { form.password } onChange = { onChange } />
            <input type = "submit" value = "Sign Up" />
            <button onClick = { e => setUser( true ) } >Already a Member?</button>
        </form>
    </FormContainer>
  )
}