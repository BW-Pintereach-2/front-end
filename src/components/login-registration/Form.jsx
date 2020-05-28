import React from "react";

import SignInForm from "./SignInForm";
import CreateAccountForm from "./CreateAccountForm";


function Form( { user, form, setForm, setUserLoggedIn } )
{
  return(
    <div> 
      { user[ 0 ] ? <SignInForm setUser = { user[ 1 ] } form = { form[ 0 ] } setForm = { setForm[ 0 ] }  setUserLoggedIn = {  setUserLoggedIn } /> :
                    <CreateAccountForm setUser = { user[ 1 ] } form = { form[ 1 ] } setForm = { setForm[ 1 ] } /> }
    </div>
  )
}

export default Form