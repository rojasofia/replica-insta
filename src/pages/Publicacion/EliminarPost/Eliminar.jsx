export const deletePost = async (postId) => {
   try {
      const response = await fetch(`https://backendinstagram-ps0x.onrender.com/posts/${postId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar el post');
      }
  
      console.log('Post eliminado exitosamente.');
   } catch (error) {
      console.error('Error:', error);
   }
  };
  
  deletePost(9);
  