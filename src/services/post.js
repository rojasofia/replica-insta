import axios from "axios";
import { endpoints } from "./data";

export const getPostsByUser = async (idUser) => {
  try {
    const { data } = await axios.get(`${endpoints.posts}?userId=${idUser}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get(endpoints.posts); // Obtiene los posts
    const users = await axios.get(endpoints.users); // Obtiene los usuarios
    const usersList = []; // Lista para almacenar los datos de los usuarios asociados a los posts

    for (const element of data) {
      const userId = element.userId;
      const user = users.data.find((item) => item.id == userId); // Encuentra el usuario correspondiente al userId de cada post
      console.log("userdata", user);
      if (user) {
        usersList.push({
          username: user.name,
          image: user.avatar,
          description: user.description,
        });
      }
    }

    return usersList; // Retorna solo la lista de usuarios
  } catch (error) {
    return null; // En caso de error, retorna null
  }
};

export const postPost = async (postCont) => {
  try {
    const { status } = await axios.post(endpoints.posts, postCont);
    return status;
  } catch (error) {
    return null;
  }
};

export const updatePost = async (id, propertyName) => {
  try {
    const { data } = await axios.patch(`${endpoints.posts}/${id}`, {
      ...propertyName,
    });
    return data;
  } catch (error) {
    return null;
  }
};

export const getTaggedPost = async (userId) => {
  try {
    const { data } = await axios.get(endpoints.posts);
    const taggedData = data.filter((post) =>
      post.tag.some((tagUserId) => tagUserId == userId)
    );
    return taggedData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getIndividualPost = async (postId) => {
  try {
    const { data, status } = await axios.get(`${endpoints.posts}/${postId}`);
    return { data, status };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getIndividualPostWithMessages = async (postId) => {
  try {
    const { data, status } = await axios.get(
      `${endpoints.posts}/${postId}?_embed=comments`
    );
    return { data, status };
  } catch (error) {
    console.log(error);
    return error;
  }
};
