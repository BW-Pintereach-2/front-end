import React, { useState } from "react"
import ArticleContainer from "./ArticleStyled";
<<<<<<< HEAD
import listOfArticles from '../articles/Articles'
=======
import Modal from "react-modal";
import "./Article.css";
>>>>>>> d388540ec5b912047bc9b4d8e8d152044b886d51

Modal.setAppElement( "#root" );

export default function( { id, title, content, onClickSaveArticle, isSaved } )
{
<<<<<<< HEAD
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
=======
  const [ modal, setModal ] = useState( false );
  const thumbtack = isSaved ? 
  <div className = "selected fas fa-thumbtack" id = { id } onClick = { onClickSaveArticle }></div> : 
  <div className = "fas fa-thumbtack" id = { id } onClick = { onClickSaveArticle }></div>;
>>>>>>> d388540ec5b912047bc9b4d8e8d152044b886d51



  return(
    <ArticleContainer>
      <div className = "articleContainer" >
        {thumbtack}
        <h3 className = "articleTitle" >{ title }</h3>
        <p className = "articleContent"> { content.substring( 0, 80 ) + "..."  } </p>

        <Modal isOpen = { modal } onRequestClose = { () => setModal( false ) } shouldCloseOnOverlayClick = { false }
          style = 
          {
            {
              overlay : 
              {
                height : "85%",
                width : "95%",
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