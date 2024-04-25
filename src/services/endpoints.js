const URL_BASE = "https://backendinstagram-ps0x.onrender.com/";

const endpoints = {
    userByEmailAndPass:(email, password) => `${URL_BASE}users?user=${email}&password=${password}`,
    getAllUsers: `${URL_BASE}users`,
    getUser: (idUser) => `${URL_BASE}users?id=${idUser}`,
    
}

export default endpoints;
