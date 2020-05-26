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
    e.preventDefault();

  }; 

  const onChangeCreateSignIn = e =>
  {
    e.preventDefault();
  }

  return (
    <LoginRegistration />      
  );
}

export default App;