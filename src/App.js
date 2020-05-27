
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Form from "./components/login-registration/Form";
import Articles from "./components/articles/Articles";

import styled from "styled-components";


import { CREATE_ACCOUNT, SIGN_IN } from "./utils/constants";

import './App.css';

const d = [ { id : 0, title : "HEllo", content : "asdfasf", pinned : false } ];

const Header = styled.div`
  color : whitesmoke;
  font-size : 120px;
  text-align : center;
  margin: 100px;
  font-family: 'Pacifico', cursive;
  letter-spacing : 13px;
`;

function App() 
{
  const [ createAccountForm, setCreateAccountForm ] = useState( CREATE_ACCOUNT );

  const [ signInForm       , setSignIn            ] = useState( SIGN_IN        );
  const [ alreadyUser      , setAlreadyUser       ] = useState( false          );

  const [ listOfArticles   , setListOfArticles    ] = useState( d             ); 

  const onChangeCreate = e => 
  {
    setCreateAccountForm( { ...createAccountForm, [ e.target.name ] : e.target.value } );
  };

  const onChangeSignIn = e =>
  {
    setSignIn( { ...signInForm, [ e.target.name ] : e.target.value } );
  }

 

  useEffect( () => {

  }, [ listOfArticles.length ] )

  return (
    <BrowserRouter>


      <Header>PinteReach</Header>

      <Switch>
        <Route path = "/articles">
          <Articles listOfArticles = { listOfArticles } />
        </Route>

        <Route path = "/" exact>
          <Form 
            user           = { [ alreadyUser       , setAlreadyUser     ] }
            form           = { [ signInForm        , createAccountForm  ] }
            onChange       = { [ onChangeSignIn    , onChangeCreate     ] }
          />
        </Route>

        {/* onSubmit       = { [ onSubmitSignInForm, onSubmitCreateForm ] }  */}

      </Switch>
    </BrowserRouter>
  );
}
export default App;