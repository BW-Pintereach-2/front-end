import React from "react";
import styled from "styled-components";
import Article from "../article/Article";

const ArticlesContainer = styled.div`
  width : 95%;
  margin : 200px auto 100px;
  display : flex;
  flex-wrap : wrap;
  justify-content: space-evenly;
  align-items : center;

  div
  {
    
  }
`;

export default function( { listOfArticles } )
{
  return(
    <ArticlesContainer>

        { listOfArticles.map( article => <Article id = { article.id } title = { article.title } content = { article.content } />) }
      
    </ArticlesContainer>
  )
}