import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormContainer from "./FormStyled";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { signInForm } from "../../utils/formSchema";
import * as yup from "yup";

export default function( { setUser, form, setForm, setUserLoggedIn } )
{
  const history = useHistory();
  const [ errorMessage, setErrorMessage ] = useState( { username : false, password : false } );

  const onChange = e =>
  {
    const name = e.target.name;
    const value = e.target.value;

    setForm( { ...form, [ name ] : value } );

    yup.reach( signInForm, name )
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
    
    if( errorMessage[ "username" ] && errorMessage[ "password" ] )
    {
      axiosWithAuth()
      .post( "/api/auth/login", form )
      .then( res => 
      {
        setUserLoggedIn( true );
        localStorage.setItem( 'token', res.data.token );
        history.push( "/articles" );
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

  const notMember = e =>
  {
    e.preventDefault();
    setUser( false );
    history.push( "/" );
  }

  return(
    <FormContainer>
        <form onSubmit = { onSubmit } >
            <h1>Login</h1>
            <input type = "username" name = "username" placeholder = "Enter Username" value = { form.username } onChange = { onChange } />
            <input type = "password" name = "password" placeholder = "Enter Password" value = { form.password } onChange = { onChange } />
            <input type = "submit" value = "Log in" />
            <button onClick = { notMember } >Not a Member?</button>
        </form>
    </FormContainer>
  )
} 