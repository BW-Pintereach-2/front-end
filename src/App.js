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
  const [ categories, setCategories ] = useState( [] ); 
  
  useEffect( () => 
  {
    if( userLoggedIn )
    {
      axiosWithAuth().get( "/api/articles" )
        .then( response => setListOfArticles( response.data.data ) )
        .catch( response => console.log( response ) )
    }
  }, [ userLoggedIn ] );

  const onClickButtonFilter = function( e )
  {
    setFilter( !filter );
    document.querySelector( "#filterButton" ).textContent = filter ? "View My Articles" : "View All Articles";
  }

  const onClickSaveArticle = function( e )
  {
    e.target.classList.toggle( "selected" ); 
    const id = e.target.id; 
    const article = listOfArticles.find(em => em.id + "" === e.target.id);
    axiosWithAuth()
      .patch(`/api/articles/${id}`, {isSaved: !article.isSaved})
      .then(res => {
        console.log(res)
        setListOfArticles( listOfArticles.map( article => { 
            if( article.id + "" === id )
              article.isSaved = !article.isSaved;
            return article; 
          } ) );
      })
      .catch(err => {
        console.log(err)
      })
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