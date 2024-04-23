import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { endpoints } from '../../services/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { URL_API } from '../../services/data';

const StyledPost = styled.nav`
.post {
    .postImage{
        width: 428px;  
        height: 558px;
    }
    .post-info{
        .user-info{
            display: flex;
            img{
                width: 48px;
                height: 48px;
                top: 530px;
                left: 83px;
                border-radius:50%
            }
            h4{
                font-family: 'Balsamiq Sans';
                font-size: 12px;
                font-weight: 700;
            }
        }

    }
}

`

const Post = ({ post, currentUser }) => {
    const [users, setUsers] = useState([]);
    const [comment, setComment] = useState('');
    const [liked, setLiked] = useState(currentUser && currentUser.likesStore.includes(post.id)); // Verifica si el usuario actual ya dio "me gusta" al post
    const [likesCount, setLikesCount] = useState(post.likes.length);

    // Agrega un nuevo estado para el número de comentarios
    const [commentsCount, setCommentsCount] = useState(post.comments.length);

    useEffect(() => {
        fetch(endpoints.users)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
        // Obtener los likes del servidor
        fetch(`${URL_API}posts/${post.id}/likes`)
            .then(response => response.json())
            .then(likes => {
                // Establecer el contador de likes en la cantidad de likes obtenidos
                setLikesCount(likes.length);
            })
            .catch(error => console.error('Error al obtener likes:', error));
    }, [post.id]);

    useEffect(() => {
        // Obtener los comentarios del servidor
        fetch(`${URL_API}posts/${post.id}/comments`)
            .then(response => response.json())
            .then(comments => {
                // Establecer el contador de comentarios en la cantidad de comentarios obtenidos
                setCommentsCount(comments.length);
            })
            .catch(error => console.error('Error al obtener comentarios:', error));
    }, [post.id]);


    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        const url = `${URL_API}comments`;

        const commentData = {
            postId: post.id,
            userId: user.id,
            text: comment,
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Comentario añadido:', data);
                setComment(''); // Limpiar el campo de comentario
                // Obtén el número actualizado de comentarios del servidor
                fetch(`${URL_API}posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => setCommentsCount(comments.length))
                    .catch(error => console.error('Error al obtener comentarios:', error));
            })
            .catch(error => console.error('Error al añadir el comentario:', error));
    };



   const handleLike = () => {
    const url = `${URL_API}posts/${post.id}/likes`;

    fetch(url, {
        method: liked ? 'DELETE' : 'POST', // Verifica si el usuario ya dio "me gusta" al post para enviar la solicitud correcta
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Like añadido o eliminado:', data);
        setLiked(!liked);
        // Actualizar el contador de likes basado en si se añadió o eliminó el "me gusta"
        setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    })
    .catch(error => console.error('Error al añadir o eliminar like:', error));
};
    // Busca el usuario que corresponde al post
    const user = users.find(user => user.id === post.userId);

    return (
        <>
            <StyledPost>
                <div className="post">
                    <img className="postImage" src={post.media} alt={post.caption} />
                    <div className="post-info">
                        <div className="user-info">
                            {user && (
                                <>
                                    <img src={user.portrait} alt={user.name} />
                                    <h4>{user.name}</h4>
                                </>
                            )}
                            <div className="post-stats">
                                <FontAwesomeIcon icon={faHeart} onClick={handleLike} color={liked ? 'red' : 'gray'} /> {post.likes.length}
                                <FontAwesomeIcon icon={faComment}/> {commentsCount}
                                <FontAwesomeIcon icon={faShare} /> {post.tag}
                            </div>
                        </div>
                        <p>{post.caption}</p>
                    </div>
                    <div className="comment-section">
                        <form onSubmit={handleCommentSubmit}>
                            <input
                                type="text"
                                value={comment}
                                onChange={handleCommentChange}
                                placeholder="Escribe un comentario..."
                            />
                            <button type="submit" onClick={handleCommentSubmit} >Enviar</button>
                        </form>
                    </div>
                </div>
            </StyledPost>
        </>
    );
};

export default Post;

