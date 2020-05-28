import React, { useState } from "react"
import ArticleContainer from "./ArticleStyled";
import Modal from "react-modal";
import "./Article.css";

Modal.setAppElement( "#root" );

export default function( { id, title, content, onClickSaveArticle, isSaved } )
{
  const [ modal, setModal ] = useState( false );

  return(
    <ArticleContainer>
      <div className = "articleContainer" >
        {isSaved ? 
          <div className = "fas fa-thumbtack" id = { id } onClick = { onClickSaveArticle }></div> : 
          <div className = "fas fa-thumbtack" id = { id } onClick = { onClickSaveArticle }></div>}
        <h3 className = "articleTitle" >{ title }</h3>
        <p className = "articleContent"> { content.substring( 0, 80 ) + "..."  } </p>

        <Modal isOpen = { modal } onRequestClose = { () => setModal( false ) } shouldCloseOnOverlayClick = { false }
          style = 
          {
            {
              overlay : 
              {
                height : "85%",
                width : "40%",
                margin : "auto auto"
              },
              content :
              {
                fontSize : "44px",
                textAlign : "center"
              }
            }
          }>
          <h3 className = "articleTitle" >{ title }</h3>
          <p className = "articleContent">{ content }</p>
          <button className = "modalButton" onClick = { e => setModal( false ) } >Close Article</button>
        </Modal>
          
        <button className = "button" onClick = { e => setModal( true ) } >Read More...</button>       
      </div>
    </ArticleContainer>
  )
}