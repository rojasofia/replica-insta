import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { endpoints } from '../../services/data';

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
       <form onSubmit={handleSubmit}>
         <label htmlFor="media">Media:</label>
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
         <label htmlFor="type">Tipo:</label>
         <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
           <option value="photo">Foto</option>
           <option value="video">Video</option>
           {/* Añade más opciones si es necesario */}
         </select>
         <button type="submit">Añadir Post</button>
       </form>
    );
   };
export default AddPost;
