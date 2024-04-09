import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Details from '../pages/Details/Details'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Perfil from '../pages/Perfil/Perfil'
import ModalEditPerfil from '../pages/ModalEditPerfil/ModalEditPerfil'
import Publicacion from '../pages/Publicacion/Publicacion'

const AppRouter = () => {
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Layout />}>
                <Route path="home" element={<Home />}>
                 <Route path="newPublicacion" element={<Publicacion />}/>
                </Route>
                <Route path="details" element={<Details />} />
            </Route>
            <Route path="perfil" element={<Perfil />}>
                 <Route path="editPerfil" element={<ModalEditPerfil />}/>
            </Route>
            <Route path="perfil" element={<Perfil />} />
        </Routes>
    </BrowserRouter>
}

export default AppRouter