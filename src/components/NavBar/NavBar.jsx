import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
 body, #root {
    margin: 0;
    padding: 0;
    margin-bottom: 80px;
 }
`;

const StyledNav = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;

    .containerNav{
        background-color: #FF7674;
        ul{
            display:flex;
            justify-content: space-around;
            align-items: flex-end;
            margin:0px;
            position: relative;
            margin-left: -30px;

            li{
                margin: 5px;                
                list-style-type: none;
                padding: 10px;

                div{
                    img{
                        width: 30px;
                        height: 30px;
                        border-radius:100px;
                    }
                }
            }
            .highlighted-icon{
                div{
                    margin: 20px;
                    position: absolute; /* Posicionamiento absoluto para sacar el ícono del flujo normal */
                    bottom: 100%; /* Posiciona el ícono justo encima del borde inferior del contenedor */
                    left: 50%; /* Centra el ícono horizontalmente */
                    transform: translateX(-50%); /* Ajusta la posición horizontal para centrarlo correctamente */

                    img{
                        width: 30px; /* Aumenta el ancho */
                        height: 30px; /* Aumenta la altura */
                        padding: 20px;
                        border: 5px solid pink; /* Borde rosado */
                        background-color:#FF7674;
                        border-radius: 50%; /* Asegura que el borde sea completamente redondeado */
                        box-shadow: 0 0 10px rgba(255, 118, 116, 0.205), 0 0 20px rgba(255, 118, 116, 0.5); /* Sombra para resaltar el icono y crear efecto de profundidad */
                        position: relative; /* Posicionamiento relativo para permitir el uso de z-index */
                        z-index: 1; /* Asegura que el ícono esté por encima de otros elementos */
                        transform: translateY(80%); /* Ajusta la posición vertical para "levantar" el ícono */
                    }
                }
            }
        }
    }
`;


const links = [
    {
        label: "FeedHome",
        icon: '/house-door-fill.svg',
        link: "home"
    },
    {
        label: "Search",
        icon: '/search.svg',
        link: "home"
    },
    {
        label: "AddPublicacion",
        icon: '/plus-lg.svg',
        link: "publicacion"
    },
    {
        label: "Notifications",
        icon: '/bell-fill.svg',
        link: "home"
    },
    {
        label: "Profile",
        icon: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
        link: "perfil"
    }
];

const NavBar = () => {
    return (
        <>
        <GlobalStyle />
        <StyledNav>
            <nav className='containerNav'>
                <ul>
                    {
                        links.map((item, index) => (
                            <li key={index} className={item.label === "AddPublicacion" ? "highlighted-icon" : ""}>
                                <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to={item.link}>
                                    <div>
                                        <img src={item.icon} alt="Iconos" />
                                    </div>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </StyledNav>
        </>
    )
}


export default NavBar;
