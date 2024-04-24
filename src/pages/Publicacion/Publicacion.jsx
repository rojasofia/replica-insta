import React from 'react'
import AddPost from './AddPost'
import styled, { createGlobalStyle } from "styled-components";


const Publicacion = () => {
  const userId = 1; // Reemplazar con usuario logueado

 return (
  <>
    <div>
      <h1>Add Post</h1>
      <AddPost userId={userId} />
    </div>
  </>
  )
}

export default Publicacion