import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { endpoints } from '../../services/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';


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

const Post = ({ post }) => {
    const [users, setUsers] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetch(endpoints.users)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // Aquí deberías implementar la lógica para añadir el comentario al backend
        console.log('Comentario enviado:', comment);
        setComment('');
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
                                <FontAwesomeIcon icon={faHeart} /> {post.likes.length} Likes
                                <FontAwesomeIcon icon={faComment} /> {post.comments.length} Comentarios
                                <FontAwesomeIcon icon={faShare} /> {post.shares} Compartidos
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
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </StyledPost>
        </>
    );
};

export default Post;
