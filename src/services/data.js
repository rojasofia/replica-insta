export const URL_API = "https://backendinstagram-ps0x.onrender.com/";

export const endpoints = {
  users: `${URL_API}/users`,
  posts: `${URL_API}/posts`,
  comments: `${URL_API}/comments`,
  user: (email, password) => {
    return `${URL_API}/users?email=${email}&password=${password}`;
  },
};
