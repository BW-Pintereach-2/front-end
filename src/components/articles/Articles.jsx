import React from "react";
import ArticlesContainer from "./ArticlesStyles";
import Article from "../article/Article";

export default function( { listOfArticles } )
{
  return(
    <ArticlesContainer>
        { listOfArticles.map( article => <Article id = { article.id } title = { article.name } content = { article.article } />) }
    </ArticlesContainer>
  )
}