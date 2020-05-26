import React, { useState } from 'react';
import LoginRegistration from "./components/login-registration/LoginResgistration";
import { CREATE_ACCOUNT, SIGN_IN } from "./utils/constants";

import './App.css';

function App() 
{
  const [ createAccountForm, setCreateAccountForm ] = useState( CREATE_ACCOUNT );
  const [ signInForm       , setSignIn            ] = useState( SIGN_IN        );

  const onChangeCreate = e => 
  {
    setCreateAccountForm( { ...createAccountForm, [ e.target.name ] : e.target.value } );
  };

  const onChangeSignIn = e =>
  {
    setSignIn( { ...signInForm, [ e.target.name ] : e.target.value } );
  }

  const onSubmitCreateForm = e =>
  {
    e.preventDefault();
  }

  const onSubmitSignInForm = e =>
  {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Login and registration</h1>  
      <LoginRegistration 
        createAccountForm  = { createAccountForm  } 
        signInForm         = { signInForm         } 
        onChangeCreate     = { onChangeCreate     }
        onChangeSignIn     = { onChangeSignIn     }
        onSubmitCreateForm = { onSubmitCreateForm }
        onSubmitSignInForm = { onSubmitSignInForm } 
      />
    </div>
  );
}

export default App;