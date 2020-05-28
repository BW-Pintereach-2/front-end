import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, FilterContainer } from "./AppStyled";
import Form from "./components/login-registration/Form";
import Articles from "./components/articles/Articles";
import SignInForm from "./components/login-registration/SignInForm";
import { CREATE_ACCOUNT, SIGN_IN } from "./utils/constants";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./utils/PrivateRoute";

function App() 
{
  const [ createAccountForm, setCreateAccountForm ] = useState( CREATE_ACCOUNT );
  const [ signInForm, setSignIn ] = useState( SIGN_IN );
  const [ alreadyUser, setAlreadyUser ] = useState( false );
  const [ filter, setFilter ] = useState( false );
  const [ listOfArticles, setListOfArticles ] = useState( [] );
  const [ userLoggedIn, setUserLoggedIn ] = useState( false ); 
  
  useEffect( () => 
  {
    axiosWithAuth().get( "/api/articles" )
      .then( response => setListOfArticles( response.data.data ) )
      .catch( response => console.log( response ) )
  }, [ userLoggedIn ] );

  //useEffect( () => {}, [ listOfArticles ] );

  const onClickButtonFilter = function( e )
  {
    setFilter( !filter );
    document.querySelector( "#filterButton" ).textContent = filter ? "View My Articles" : "View All Articles";
  }

  const onClickSaveArticle = function( e )
  {
    e.target.classList.toggle( "selected" ); 
    setListOfArticles( listOfArticles.map( article => 
    { 
      if( article.id + "" === e.target.id )
        article.isSaved = !article.isSaved;
      return article; 
    } ) );
  }

  return (
    <BrowserRouter>

      <Header>PinteReach</Header>

      <Switch>
        
        <PrivateRoute path = "/articles">

          <FilterContainer>
            <button id = "filterButton" onClick = { onClickButtonFilter } >View My Articles</button>
          </FilterContainer>

          { filter ? <Articles listOfArticles = { listOfArticles.filter( article => article.isSaved ) } onClickSaveArticle = { onClickSaveArticle } /> : <Articles listOfArticles = { listOfArticles } onClickSaveArticle = { onClickSaveArticle } /> }
          
        </PrivateRoute>


        <Route path = "/login" >
          <SignInForm setUser = { setAlreadyUser } setUserLoggedIn = { setUserLoggedIn } form = { signInForm } setForm = { setSignIn } />  
        </Route>

        <Route path = "/" exact>

          <Form 
            user = { [ alreadyUser, setAlreadyUser ] }
            form = { [ signInForm, createAccountForm ] }
            setForm = { [ setSignIn, setCreateAccountForm ] }
            setUserLoggedIn = { setUserLoggedIn }
          />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;