import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams
import Post from './Post';
import { endpoints } from '../../services/data';

const Details = () => {
 const { id } = useParams(); // Utiliza useParams para obtener el ID del post
 const [postData, setPostData] = useState(null);

 useEffect(() => {

const fetchPostData = async () => {
 try {
    // Utiliza el endpoint correcto para obtener un post específico
    const response = await fetch(`${endpoints.posts}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener los datos del post');
    }
    // Verifica si la respuesta es JSON antes de intentar analizarla
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, no se esperaba este tipo de contenido.");
    }
    const data = await response.json();
    setPostData(data);
 } catch (error) {
    console.error('Error:', error);
 }
};


    fetchPostData();
 }, [id]); // Dependencia del efecto: el ID del post

 if (!postData) {
    return <div>Cargando...</div>;
 }

 return (
    <div className="Details">
      <Post post={postData} />
    </div>
 );
};

export default Details;
