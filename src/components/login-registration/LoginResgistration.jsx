import React, { useState, useEffect } from "react";

import styled from "styled-components";

const RegistrationLogin = styled.div`
    width : 80%;
    margin : 0 auto;

    display : flex;
    justify-content : center; 

    form
    {
        margin : 20px;
    }

    input
    {
        display : block;
    }

    a
    {
        display : block;
    }

    input[ type = "submit" ]
    {
        text-align : center;
        margin : 0 auto;
        width : 100%;
        height : 40px;
        border : none;
    }
`;

function ComponentName( props )
{
  return(
    <RegistrationLogin>
        <form onSubmit = { props.onSubmitCreateForm } >
            <h1>Create Account</h1>
            <input type = "text"     name = "name"     placeholder = "Enter Name"     value = { props.createAccountForm.name      } onChange = { props.onChangeCreate } />
            <input type = "email"    name = "email"    placeholder = "Enter Email"    value = { props.createAccountForm.email     } onChange = { props.onChangeCreate } />
            <input type = "password" name = "password" placeholder = "Enter Password" value = { props.createAccountForm.password  } onChange = { props.onChangeCreate } />
            <input type = "submit" value = "Sign Up" />
        </form>

        <form onSubmit = { props.onSubmitSignInForm } >
            <h1>Sign In</h1>
            <input type = "email"    name = "name"     placeholder = "Enter Email"    value = { props.signInForm.email    } onChange = { props.onChangeSignIn } />
            <input type = "password" name = "password" placeholder = "Enter Password" value = { props.signInForm.password } onChange = { props.onChangeSignIn } />
            <a href = "#" >Forgot password?</a>
            <input type = "submit" value = "Sign In" />
        </form>
    </RegistrationLogin>
  )
}

export default ComponentName