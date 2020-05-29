import React, { useState, useEffect } from "react"
import ArticleContainer from "./ArticleStyled";
import listOfArticles from '../articles/Articles'



export default function( { id, title, content } )
{
  const onSubmit = e =>
  {
    //Validate -> using YUP!!!
    e.preventDefault();
    axiosWithAuth()
      .put(`https://pintereach-web29.herokuapp.com/articles/${id}`, content)
      .then( res => {
        console.log(res);
        history.push( "/articles" );
      })
      .catch(err => {
        console.log(err);
      })
  }


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