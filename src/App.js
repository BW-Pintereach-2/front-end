import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import axios from "axios";

import { Header, FilterContainer } from "./AppStyled";
import Form from "./components/login-registration/Form";
import Articles from "./components/articles/Articles";

import { CREATE_ACCOUNT, SIGN_IN } from "./utils/constants";

axios.defaults.baseURL = "https://pintereach-web29.herokuapp.com/";

const d = [ { title : "HEllo", content : "asdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : false } ];

function App() 
{
  const [ createAccountForm, setCreateAccountForm ] = useState( CREATE_ACCOUNT );
  const [ signInForm       , setSignIn            ] = useState( SIGN_IN        );
  const [ alreadyUser      , setAlreadyUser       ] = useState( false          );
  const [ filter           , setFilter            ] = useState( false          );
  const [ listOfArticles   , setListOfArticles    ] = useState( d              ); 
  
  const onChangeCreate = e => 
  {
    setCreateAccountForm( { ...createAccountForm, [ e.target.name ] : e.target.value } );
  };

  const onChangeSignIn = e =>
  {
    setSignIn( { ...signInForm, [ e.target.name ] : e.target.value } );
  }

  useEffect( () => {

    axios(  "https://pintereach-web29.herokuapp.com/" )
      .then( response => console.log( response ) )
      .catch( response => console.log( response ) )

  }, [ listOfArticles.length ] )

  return (
    <BrowserRouter>

      <Header>PinteReach</Header>

      <Switch>
        
        <Route path = "/articles">

          <FilterContainer>
            <button onClick = { e => setFilter( !filter ) } >My Articles</button>
          </FilterContainer>

          { filter ? <Articles listOfArticles = { listOfArticles.filter( article => article.pinned ) } /> : <Articles listOfArticles = { listOfArticles } /> }
          
        </Route>

        <Route path = "/" exact>
          <Form 
            user           = { [ alreadyUser       , setAlreadyUser     ] }
            form           = { [ signInForm        , createAccountForm  ] }
            onChange       = { [ onChangeSignIn    , onChangeCreate     ] }
          />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}
export default App;