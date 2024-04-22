import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Perfil from '../pages/Perfil/Perfil';
import ModalEditPerfil from '../pages/ModalEditPerfil/ModalEditPerfil';
import Publicacion from '../pages/Publicacion/Publicacion';
import Index from '../pages/Index';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="home" element={<Home />} />
                    <Route path="details/:id"  element={<Details />} />
                </Route>
                <Route path="perfil" element={<Perfil />}>
                    <Route path="editPerfil" element={<ModalEditPerfil />} />
                </Route>
                <Route path="publicacion" element={<Publicacion />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
