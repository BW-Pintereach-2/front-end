import styled from "styled-components";

export default styled.div`
    background : whitesmoke;
    width : 40%;
    height : 600px;
    margin : 200px auto 0;
    display : flex;
    justify-content : center; 
    border-radius : 30px;
    border : 5px solid #3E78B2;
    box-shadow: 0 14px 28px rgba( 0, 0, 0, 0.25 ), 0 10px 10px rgba( 0, 0, 0, 0.22 );

    form
    {
        margin : 20px;
    }

    h1
    {
      color : #004BA8;
      font-size : 50px;
      text-align : center;
      margin-bottom : 75px;
    }

    input
    {
        display : block;
        margin : 20px 0;
        width : 600px;
        height : 45px;
        text-align : center;
        font-size : 30px;
        border-color : black;
    }

    button
    {
        display : inline-block;
        text-decoration : none;
        margin: 30px 65%;
        width : 240px;
        color : #004BA8;
        font-size : 23px;
        background : transparent;
        border : none;
    }

    input[ type = "submit" ]
    {
        text-align : center;
        margin : 0 auto;
        width : 100%;
        height : 75px;
        border : 3px solid #004BA8;
        color : #004BA8;
        border-radius : 20px;
        transition : all 0.8s;
        background : white;
    }

    input[ type = "submit" ]:hover
    {
      color : white;
      background : #004BA8;
    }
`;