import React from 'react'
import AddPost from './AddPost'
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400..800&display=swap');
  
  body {
    font-family: 'Balsamiq Sans', cursive;
    font-family: "Baloo Thambi 2", system-ui;
  }
`;

const StyledPost = styled.nav`
height: 100vh;
background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 188, 116, 0.6) 0%,
      rgba(255, 188, 116, 0) 100%
    );
    display: flex;
 align-items: center; /* Centra horizontalmente */
 justify-content: center; /* Centra verticalmente */
 flex-direction: column;
 height: 100vh;

    img {
      width: 25%;
      height: 10%;
      margin-top: 30px;
    }

    div{
    width: 356px;
    height: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10%;
    margin-top: 10px; 
    }
    h1{
      font-family: 'Balsamiq Sans', cursive;
      color: #FF7674;
    }

`


const Publicacion = () => {
  const userId = 1; // Reemplazar con usuario logueado

  return (
    <>
      <StyledPost>
        <img src="public/LOGO FYND COMPL.png" alt="iconapp" />
        <div>
          <h1>Add Post</h1>
          <AddPost userId={userId} />
        </div>
      </StyledPost>
    </>
  )
}

export default Publicacion