import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { endpoints } from '../../services/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { URL_API } from '../../services/data';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400..800&display=swap');
  
  body {
    font-family: 'Balsamiq Sans', cursive;
    font-family: "Baloo Thambi 2", system-ui;
  }
`;

<<<<<<< HEAD
=======
const DeviceStatusBar = styled.div`
  background-color: #f8f9fa; 
  padding: 5px 30px; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  z-index: 1;
`;

const Icon = styled.img`
margin-right: 10px; 
`;

const Time = styled.span`
  font-size: 1em; 
  color: #333; 

`;
>>>>>>> b1ba0de14c026aef65483296e51aba67f63eccfb

const StyledPost = styled.nav`
.post {
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px; 
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 188, 116, 0.6) 0%, rgba(255, 188, 116, 0) 100%);

        .comment-section {
            display: flex;
            img{
                width: 32px; 
                height: 32px; 
                padding: 20px;
                border-radius: 50%;
            }
            form{
                input{
<<<<<<< HEAD
=======
                box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
>>>>>>> b1ba0de14c026aef65483296e51aba67f63eccfb
                width: 356px;
                height: 40px;
                top: 791px;
                left: 56px;
                border: 1px solid transparent;
                border-radius: 20px;
                margin-top: 10px;
                font-family: 'Balsamiq Sans', cursive;
                font-size: 12px;
                font-weight: 400;
                }
                button{
                    width: 20px;
                    height: 20px;
                    background-color: transparent; 
                    border: none;
                    outline: none;
                    cursor: pointer; 
                    position: relative;
                    left: -50px;
                }

            }
        }

    .postImage{
        width: 428px;  
        height: 558px;
        border-radius: 30px;
<<<<<<< HEAD
=======
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);         
>>>>>>> b1ba0de14c026aef65483296e51aba67f63eccfb
    }
    .post-info{

        p{
            font-family: 'Baloo Thambi 2', system-ui;
            font-size: 14px;
            font-weight: 400;
            text-align: justified;
            margin-top: -60px;

        }
        
        .user-info{            
            display: flex;
            width: 278px;
            height: 64px;
            top: -70px;
            border-radius: 20px;
            background-color: white;
            padding-left: 15px;
            padding-top: 15px;
            margin: 10px;
            position: relative; 
            z-index: 0;
<<<<<<< HEAD
=======
            box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
>>>>>>> b1ba0de14c026aef65483296e51aba67f63eccfb

            img{
                width: 48px;
                height: 48px;
                border-radius:50%
            }
            h4{
                padding-left: 5px;
                font-family: 'Balsamiq Sans', cursive;
                font-size: 14px;
                font-weight: 700;
            }
        }
        .post-stats{
            margin-left: 30px;
            margin-top: 20px;

            .Iconos{
                width: 18.08px;
                height: 16px;
                gap: 50px;
                padding-left: 10px;
            }
            label{
                font-family: 'Balsamiq Sans', cursive;
                font-size: 12px;
                font-weight: 400;
                line-height: 14.4px;
                text-align: justified;
  
            }
        }
        

    }
}

`
const userLogged = {
<<<<<<< HEAD
        label: "Profile",
        iconProfile: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
        link: "perfil"
    }
=======
    label: "Profile",
    iconProfile: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
    link: "perfil"
}
>>>>>>> b1ba0de14c026aef65483296e51aba67f63eccfb

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
        fetch(`${URL_API}posts/${post.id}/likes`)
            .then(response => response.json())
            .then(likes => {
                setLikesCount(likes.length);
                setLiked(currentUser && likes.find(like => like.userId === currentUser.id));
            })
            .catch(error => console.error('Error al obtener likes:', error));
    }, [post.id, currentUser]);

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
<<<<<<< HEAD

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
=======

        fetch(url, {
            method: liked ? 'DELETE' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user.id,
                like: 1,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (liked) {
                    setLikesCount(likesCount - 1);
                } else {
                    setLikesCount(likesCount + 1);
                }
                setLiked(!liked);
            })
            .catch(error => console.error('Error al añadir o eliminar like:', error));
    };

>>>>>>> b1ba0de14c026aef65483296e51aba67f63eccfb
    // Busca el usuario que corresponde al post
    const user = users.find(user => user.id === post.userId);

    return (
        <>
            <StyledPost>
                <DeviceStatusBar>
                    <Icon src="/public/connection.png" alt="WiFi" />
                    <Time>9:41</Time>
                    <div>
                        <Icon src="/public/red.png" alt="Signal" />
                        <Icon src="/public/battery.png" alt="Battery" />
                    </div>
                </DeviceStatusBar>
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
<<<<<<< HEAD
                                <FontAwesomeIcon className="Iconos" icon={faHeart} onClick={handleLike} color={liked ? "#eb4d4d" : "#c0a7caeb"} /> <label>{post.likes.length}</label>
=======
                                <FontAwesomeIcon className="Iconos" icon={faHeart} onClick={handleLike} color={liked ? "#eb4d4d" : "#c0a7caeb"} /> <label>{likesCount}</label>
>>>>>>> b1ba0de14c026aef65483296e51aba67f63eccfb
                                <FontAwesomeIcon className="Iconos" icon={faComment} style={{ color: "#c0a7caeb" }} />  <label>{commentsCount}</label>
                                <FontAwesomeIcon className="Iconos" icon={faShare} style={{ color: "#c0a7caeb" }} /> <label>{post.tag}</label>
                            </div>
                        </div>
                        <p>{post.caption}</p>
                    </div>
                    <div className="comment-section">
                        <img src={userLogged.iconProfile} alt="Profile" className="imgProfile" />
                        <form onSubmit={handleCommentSubmit}>
                            <input
                                type="text"
                                value={comment}
                                onChange={handleCommentChange}
                                placeholder="Write comment as username...."
                            />
<<<<<<< HEAD
                            <button type="submit" onClick={handleCommentSubmit} ><FontAwesomeIcon icon={faPaperPlane} style={{ color: "#FF7674" }}  /></button>
=======
                            <button type="submit" onClick={handleCommentSubmit} ><FontAwesomeIcon icon={faPaperPlane} style={{ color: "#FF7674" }} /></button>
>>>>>>> b1ba0de14c026aef65483296e51aba67f63eccfb
                        </form>
                    </div>
                </div>
            </StyledPost>
        </>
    );
};

export default Post;

