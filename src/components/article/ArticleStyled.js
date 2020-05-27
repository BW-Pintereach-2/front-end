import styled from "styled-components";

export default styled.div`
display : flex;
flex-wrap : wrap;

.fas
{
  font-size : 40px;
  color : rgb( 190, 190, 190 );
  align-self : flex-start;
  margin-left : 40px;
}

.selected
{
  color : #004BA8;
}
  
.articleContainer
{
  background : whitesmoke;
  width : 100%;
  min-height : 500px;
  min-width : 700px;
  margin : 40px 30px;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  border-radius : 30px;
  box-shadow: 0 14px 28px rgba( 0, 0, 0, 0.25 ), 0 10px 10px rgba( 0, 0, 0, 0.22 );
}

.articleTitle
{
  font-size : 60px;
  letter-spacing : 3px;
  color : #004BA8;
}

.articleContent
{
  font-size : 35px;
  margin : 5px 40px;
}

a
{
  background : white;
  border-radius : 30px;
  width : 400px;
  padding : 16px 0;
  color : #004BA8;
  font-size : 20px;
  margin : 30px 0;
  border : 2px solid #004BA8;
  text-align : center;
  transition : all 1s;
}

a:hover
{
  background : #004BA8;
  color : whitesmoke;
}
`;