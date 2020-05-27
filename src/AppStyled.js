import styled from "styled-components";

const Header = styled.div`
  color : whitesmoke;
  font-size : 120px;
  text-align : center;
  margin: 50px 0 100px;
  font-family: 'Pacifico', cursive;
  letter-spacing : 13px;
`;


const FilterContainer = styled.div`
  text-align : right;
  position : relative;
  right : 150px; 

  button
  {
    width : 350px;
    height : 70px;  
    border-radius : 30px;
    color : rgb( 190, 190, 190 );
    font-size : 26px;
    color : #004BA8;
    border : 3px solid #004BA8;
  }

  button:hover
  {
    background : #004BA8;
  }
`;

export { Header, FilterContainer };