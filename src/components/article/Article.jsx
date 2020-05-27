import React, { useState, useEffect } from "react"
import ArticleContainer from "./ArticleStyled";



export default function( { id, title, content } )
{
  const [ readFullDescription, setReadFullDescription ] = useState( false );

  return(
    <ArticleContainer id = { id }>
      <div className = "articleContainer" >
        <div className = "fas fa-thumbtack" onClick = { e => e.target.classList.toggle( "selected" ) }></div>
        <h3 className = "articleTitle" >{ title }</h3>
        <p className = "articleContent"> { readFullDescription ? content : content.substring( 0, 30 ) + "..."  } </p>
        <a onClick = { e => setReadFullDescription( !readFullDescription ) } > { readFullDescription ? "Read Less..." : "Read More..." } </a>       
      </div>
    </ArticleContainer>
  )
}