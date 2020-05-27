import React, { useEffect } from "react";

import SignInForm from "./SignInForm";
import CreateAccountForm from "./CreateAccountForm";


function Form( { user, form, onChange, onSubmit } )
{
  return(
    <div> 
      { user[ 0 ] ? <SignInForm setUser = { user[ 1 ] } form = { form[ 0 ] } onChange = { onChange[ 0 ] } /> :
                    <CreateAccountForm setUser = { user[ 1 ] } form = { form[ 1 ] } onChange = { onChange[ 1 ] } /> }
    </div>
  )
}

export default Form