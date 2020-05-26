import React, { useState, useEffect } from "react";

import styled from "styled-components";

const RegistrationLogin = styled.div`
    width : 80%;
    margin : 0 auto;
    background : red;

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
`;

function ComponentName()
{
  return(
    <RegistrationLogin>
        <form onSubmit="">
            <h1>Create Account</h1>
            <input type = "text"     name = "name"     placeholder = "Enter Name"     />
            <input type = "email"    name = "email"    placeholder = "Enter Email"    />
            <input type = "password" name = "password" placeholder = "Enter Password" />
            <button>Sign Up</button>
        </form>

        <form onSubmit="">
            <h1>Sign In</h1>
            <input type = "email"    name = "name"     placeholder = "Enter Email"    />
            <input type = "password" name = "password" placeholder = "Enter Password" />
            <a href = "#" >Forgot password?</a>
            <button>Sign In</button>
        </form>
    </RegistrationLogin>
  )
}

export default ComponentName