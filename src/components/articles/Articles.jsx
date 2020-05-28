import React from "react";
import ArticlesContainer from "./ArticlesStyles";
import Article from "../article/Article";

export default function( { listOfArticles, onClickSaveArticle } )
{
  return(
    <ArticlesContainer>
        { listOfArticles.map( article => <Article key = { article.id } id = { article.id } title = { article.name } content = { article.article } onClickSaveArticle = { onClickSaveArticle } />) }
    </ArticlesContainer>
  )
}