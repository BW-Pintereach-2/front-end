import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header, FilterContainer } from "./AppStyled";
import Form from "./components/login-registration/Form";
import Articles from "./components/articles/Articles";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import SignInForm from "./components/login-registration/SignInForm";

import { CREATE_ACCOUNT, SIGN_IN } from "./utils/constants";

const d = [ { title : "HEllo", content : "asdfasf asdfasf asdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : false } ];

function App() 
{
  const [ createAccountForm, setCreateAccountForm ] = useState( CREATE_ACCOUNT );
  const [ signInForm, setSignIn ] = useState( SIGN_IN );
  const [ alreadyUser, setAlreadyUser ] = useState( false );
  const [ filter, setFilter ] = useState( false );
  const [ listOfArticles, setListOfArticles ] = useState( [] );
  const [ userLoggedIn, setUserLoggedIn ] = useState( false ); 
  
  const onChangeCreate = e => 
  {
    setCreateAccountForm( { ...createAccountForm, [ e.target.name ] : e.target.value } );
  };

  const onChangeSignIn = e =>
  {
    setSignIn( { ...signInForm, [ e.target.name ] : e.target.value } );
  }

  useEffect( () => {
    axiosWithAuth().get( "/api/articles" )
      .then( response => setListOfArticles( prev => prev.concat( response.data.data ) ) )
      .catch( response => console.log( response ) )

  }, [ userLoggedIn ] );

  useEffect( () => {}, listOfArticles.length );

  const onClickButtonFilter = function( e )
  {
    setFilter( !filter );
    document.querySelector( "#filterButton" ).textContent = filter ? "View My Articles" : "View All Articles";
  }

  return (
    <BrowserRouter>

      <Header>PinteReach</Header>

      <Switch>
        
        <Route path = "/articles">

          <FilterContainer>
            <button id = "filterButton" onClick = { onClickButtonFilter } >View My Articles</button>
          </FilterContainer>

          { filter ? <Articles listOfArticles = { listOfArticles.filter( article => article.isSaved ) } /> : <Articles listOfArticles = { listOfArticles } /> }
          
        </Route>

        <Route path = "/login" >
          <SignInForm setUser = { setAlreadyUser } setUserLoggedIn = { setUserLoggedIn } form = { signInForm } onChange = { onChangeSignIn } />  
        </Route>

        <Route path = "/" exact>
          <Form 
            user = { [ alreadyUser, setAlreadyUser ] }
            form = { [ signInForm, createAccountForm ] }
            onChange = { [ onChangeSignIn, onChangeCreate ] }
            setUserLoggedIn = { setUserLoggedIn }
          />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}
export default App;