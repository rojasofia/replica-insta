/*import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import { createUser } from "../../services/userServices";

const passwordRegex =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

const StyledRegister = styled.form`
  .error {
    border: 2px solid red;
  }
`;

const Register = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "El nombre no debe exceder los 20 caracteres")
        .required("Debe digitar su nombre completo"),
      email: Yup.string()
        .email("Por ingrese un correo válido")
        .required("Debe digitar su correo electrónico"),
      password: Yup.string()
        .required("Debe digitar una contraseña")
        .matches(
          passwordRegex,
          "La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico, debe contener más de 8 caracteres pero no exceder los 16 caracteres."
        )
        .oneOf(
          [Yup.ref("repeatPassword")],
          "La contraseña ingresada no coincide"
        ),
      repeatPassword: Yup.string()
        .required("Debe digitar una contraseña")
        .matches(
          passwordRegex,
          "La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico, debe contener más de 8 caracteres pero no exceder los 16 caracteres."
        )
        // .oneOf(
        //   [Yup.ref("password")],
        //   "La contraseña ingresada no coincide"
        // ),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const user = {
        name: values.name,
        email: values.email,
        password: values.password
      }
      const response = await createUser(user);
      if (response) {
        alert("Excelente! Haz creado exitosamente tu cuenta")
        navigate('/login');
      } else {
        alert("Oops! Ha ocurrido un error")
      }
    },
  });
  return (
    <>
      <StyledRegister onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Nombre y apellido</label>
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            id="name"
            name="name"
            className={formik.touched.name && formik.errors.name ? "error" : ""}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <span>{formik.errors.name}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Correo electrónico</label>
          <input
            type="text"
            placeholder="ejemplo@email.com"
            id="email"
            name="email"
            className={
              formik.touched.email && formik.errors.email ? "error" : ""
            }
            {...formik.getFieldProps("email")}
            // onChange={formik.handleChange}
            // value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese una contraseña"
            id="password"
            name="password"
            className={
              formik.touched.password && formik.errors.password ? "error" : ""
            }
            {...formik.getFieldProps("password")}
            // onChange={formik.handleChange}
            // value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <span>{formik.errors.password}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Confirmar contraseña</label>
          <input
            type="password"
            placeholder="Ingrese la contraseña anterior"
            id="repeatPassword"
            name="repeatPassword"
            className={
              formik.touched.repeatPassword && formik.errors.repeatPassword
                ? "error"
                : ""
            }
            // onChange={formik.handleChange}
            // value={formik.values.repeatPassword}
            {...formik.getFieldProps("repeatPassword")}
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
            <span>{formik.errors.repeatPassword}</span>
          ) : null}
        </div>
        <button type="submit">Registrarse</button>
      </StyledRegister>
      <p>
        Si ya tiene una cuenta inicie sesión <Link to={"/login"}>aquí!</Link>
      </p>
    </>
  );
};

export default Register;


import React, { useState } from 'react';
import {
  StyledBackground,
  Names, Campos, Contenedor, Pregunta, Regisbuton,
} from './StyledRegister';
import ImagenLo from '../../assets/imglogo/ImagenLogo.png';
import LetraLog from '../../assets/imglogo/LOGOLOGO.png';
import botonRegis from '../../assets/imglogo/Register.png';
import { useNavigate } from 'react-router-dom';
import endpoints from '../../services/enpoints';

const endpoint = endpoints.users

const RegistroForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    name: '',
    telephone: '',
    password: ''
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.id;
    setForm({
      ...form,
      [key]: value
    })

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      console.log(response)

      if (response.ok) {
        console.log('Registration data saved successfully');
        alert("Has creado tu cuenta exitosamente");
        navigate('/login');
        // Optionally clear the form or redirect to another page
      } else {
        console.error('Failed to save registration data:', response.statusText);
        alert("Ha ocurrido un error, intente de nuevo");
      }
    } catch (error) {
      console.error('Error saving registration data:', error);
    }
  };

  return (
    <div>
      <div>
        <img src={ImagenLo} alt="Logo" />
      </div>
      <div>
        <img src={LetraLog} alt="Letra" />
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Nombre completo:</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="telephone">Número celular:</label>
            <input
              type="text"
              id="telephone"
              value={form.telephone}
              onChange={handleChange}
            />
          </div>
          <p>¿Tienes una cuenta?</p>
          <button type="submit">
            <img src={botonRegis} alt="Botón" />
          </button>
        </form>
      </div>
    </div>
  );
};


export default RegistroForm;
*/




import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import endpoints from '../../services/enpoints';
import ImagenLo from '../../assets/imglogo/ImagenLogo.png';
import LetraLog from '../../assets/imglogo/LOGOLOGO.png';
import botonRegis from '../../assets/imglogo/Register.png';

const endpoint = endpoints.users;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const RegistroForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    name: '',
    telephone: '',
    password: ''
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm({
      ...form,
      [id]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Has creado tu cuenta exitosamente");
        navigate('/login');
      } else {
        console.error('Failed to save registration data:', response.statusText);
        alert("Ha ocurrido un error, intente de nuevo");
      }
    } catch (error) {
      console.error('Error saving registration data:', error);
    }
  };

  return (
    <Container>
      <div>
        <img src={ImagenLo} alt="Logo" />
      </div>
      <div>
        <img src={LetraLog} alt="Letra" />
      </div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username">Nombre de usuario:</Label>
            <Input
              type="text"
              id="username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="name">Nombre completo:</Label>
            <Input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Contraseña:</Label>
            <Input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="telephone">Número celular:</Label>
            <Input
              type="text"
              id="telephone"
              value={form.telephone}
              onChange={handleChange}
            />
          </div>
          <p>¿Tienes una cuenta?</p>
          <Button type="submit">
            <img src={botonRegis} alt="Botón" />
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default RegistroForm;