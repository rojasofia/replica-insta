import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { endpoints } from '../../services/data';
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
form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label{
        font-family: "Baloo Thambi 2", system-ui;
    }
    input, select {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        border: 1px solid transparent;
        margin: 20px;
        border-radius: 20px;
        font-family: "Baloo Thambi 2", system-ui;
        width: 205px;
        height: 30px;
    }
    button {
        width: 105px;
        height: 40px;
        margin: 24px;
        margin-top: 5%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        border: 1px solid transparent;
        border-radius: 20px;
        font-family: "Balsamiq Sans", cursive;
        background-color: #FFBC74;
    }
}
`
const AddPost = ({ userId }) => {
    const [media, setMedia] = useState('');
    const [caption, setCaption] = useState('');
    const [type, setType] = useState('photo'); // Asumiendo que el tipo por defecto es 'photo'
    const navigate = useNavigate(); // Utiliza useNavigate para obtener la función de navegación
   
    const handleSubmit = async (e) => {
       e.preventDefault();
   
       const postData = {
         userId, // Incluir el userId en los datos del post
         media,
         caption,
         tag: [0], 
         likes: [0],
         comments: [0],
         type,
       };
   
       try {
         const response = await fetch(endpoints.posts, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(postData),
         });
   
         if (!response.ok) {
           throw new Error('Error al añadir el post');
         }
   
         const data = await response.json();
         console.log('Post añadido con éxito:', data);
         // Navegar a la página de detalles del post añadido
         navigate(`/details/${data.id}`);
       } catch (error) {
         console.error('Error:', error);
         // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
       }
    };
   
    return (
        <StyledPost>
       <form onSubmit={handleSubmit}>
         <label htmlFor="media">Link new post:</label>
         <input
           type="text"
           id="media"
           value={media}
           onChange={(e) => setMedia(e.target.value)}
         />
         <label htmlFor="caption">Caption:</label>
         <input
           type="text"
           id="caption"
           value={caption}
           onChange={(e) => setCaption(e.target.value)}
         />
         <label htmlFor="type">Type:</label>
         <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
           <option value="photo">Foto</option>
           <option value="video">Video</option>
           {/* Añade más opciones si es necesario */}
         </select>
         <button type="submit">Add Post</button>
       </form>
       </StyledPost>
    );
   };
export default AddPost;
