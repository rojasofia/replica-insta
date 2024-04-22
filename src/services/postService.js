import axios from "axios";
import { endpoints } from "./data";

//obtener los posts
export const getPosts = async (idUser) => {
  try {
    const { data } = await axios.get(`${endpoints.posts}?userId=${idUser}`);
    return data;
  } catch (error) {
    return null;
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

//obtener los post comentados
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
//recupera los comentarios
export const getIndividualPost = async (postId) => {
  try {
    const { data, status } = await axios.get(`${endpoints.posts}/${postId}`);
    return { data, status };
  } catch (error) {
    console.log(error);
    return error;
  }
};

//función para los comentarios
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
