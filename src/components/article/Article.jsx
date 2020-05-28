import React, { useState } from "react"
import ArticleContainer from "./ArticleStyled";
import Modal from "react-modal";

export default function( { id, title, content, onClickSaveArticle } )
{
  const [ readFullDescription, setReadFullDescription ] = useState( false );

  return(
    <ArticleContainer>
      <div className = "articleContainer" >
        <div className = "fas fa-thumbtack" id = { id } onClick = { onClickSaveArticle }></div>
        <h3 className = "articleTitle" >{ title }</h3>
        <p className = "articleContent"> { content.substring( 0, 80 ) + "..."  } </p>
        <a onClick = { e => setReadFullDescription( !readFullDescription ) } > { readFullDescription ? "Read Less..." : "Read More..." } </a>       
      </div>
    </ArticleContainer>
  )
}