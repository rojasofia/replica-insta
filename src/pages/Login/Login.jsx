/*import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default <Login></Login>*/

/*
import useForm from "../../hooks/useForm";
import { getUserByEmailAndPassword } from "../../services/userServices";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction:column;
    width:60%;
    gap:15px;
    div{
        display:flex;
        flex-direction:column;
    }
`
const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 80vh;
 `
 const INITIALVALUE = {
    userName: '',
    password: ''
}

const Login = ({setUser}) => {
    const navigate = useNavigate()
    const [form, handleChange, reset] = useForm(INITIALVALUE)

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(form);
        const user = await getUserByEmailAndPassword(form);
        reset();
        if (user) {
            setUser(user)
            alert(`Bienvenid@ ${form.userName}`)
            navigate('/home') // recodar enlazar con home
        } else {
            alert(`Verifique sus credenciales`)
        }

    }

    return (
        <>
            <StyledLogin>
                <h1>Inicio de sesión</h1>
                <StyledForm onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Usuario"
                            value={form.userName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </StyledForm>
                <p>¿Aún no tienes una cuenta? {" "}
                    <Link to={"/register"}>Regístrate ahora </Link>
                </p>
            </StyledLogin>
        </>
    )
};

export default Login;*/

import useForm from "../../hooks/useForm";
import { getUserByEmailAndPassword } from "../../services/userServices";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    gap: 15px;
    height: 60%;
    background: white;
   



    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
    }

    label {
        margin-bottom: 5px;
        font-weight: bold;
      

    }

    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }
    h1 {
        margin-bottom: 20px;
        Font: Balsamiq Sans;
        color: #FF7674;
    }
`;

const StyledLogin = styled.div`
    background: linear-gradient(to bottom right,#FF7674, #F8F8F8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    

    p {
        margin-top: 20px;
        font-size: 17px;
    }
`;

const INITIAL_VALUE = {
    userName: "",
    password: "",
};

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [form, handleChange, reset] = useForm(INITIAL_VALUE);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(form);
        const user = await getUserByEmailAndPassword(form);
        reset();
        if (user) {
            setUser(user);
            alert(`Bienvenid@ ${form.userName}`);
            navigate("/home"); // recodar enlazar con home
        } else {
            alert(`Verifique sus credenciales`);
        }
    };

    return (
        <StyledLogin>
            <img src="public\logofindycompleto.png" alt="logo" />
            
            <StyledForm onSubmit={handleSubmit}>
                <h1>Inicio de sesión</h1>
                <div>
                    <label htmlFor="userName">Nombre de usuario</label>
                    <input className="NombreU"
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Usuario"
                        value={form.userName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Enviar</button>
                <p>
                ¿Aún no tienes una cuenta?{" "}
                <Link to={"/register"}>Regístrate ahora</Link>
            </p>
            </StyledForm>

            
        </StyledLogin>
    );
};

export default Login;
