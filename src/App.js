

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Form from "./components/login-registration/Form";
import Articles from "./components/articles/Articles";

import styled from "styled-components";


import { CREATE_ACCOUNT, SIGN_IN } from "./utils/constants";

import './App.css';

const d = [ { title : "HEllo", content : "asdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : false }, { title : "HEllo", content : "asdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : true }, { title : "HEllo", content : "asdfasf", pinned : false } ];

const Header = styled.div`
  color : whitesmoke;
  font-size : 120px;
  text-align : center;
  margin: 50px 0 100px;
  font-family: 'Pacifico', cursive;
  letter-spacing : 13px;
`;


const FilterContainer = styled.div`
  text-align : right;
  position : relative;
  right : 150px; 

  button
  {
    width : 350px;
    height : 70px;  
    border-radius : 30px;
    color : rgb( 190, 190, 190 );
    font-size : 26px;
    color : #004BA8;
    border : 3px solid #004BA8;
  }

  button:hover
  {
    background : #004BA8;
  }
`;

function App() 
{
  const [ createAccountForm, setCreateAccountForm ] = useState( CREATE_ACCOUNT );
  const [ signInForm       , setSignIn            ] = useState( SIGN_IN        );
  const [ alreadyUser      , setAlreadyUser       ] = useState( false          );
  const [ filter           , setFiler             ] = useState( false          );
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

  }, [ listOfArticles.length ] )

  return (
    <BrowserRouter>

      <Header>PinteReach</Header>

      <Switch>
        
        <Route path = "/articles">

          <FilterContainer>
            <button>My Articles</button>
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