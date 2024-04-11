import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`

    .containerNav{
        width: 428px;
        height: 57px;
        background-color: #FF7674;              

            ul{
            display:flex;
            justify-content: space-around;
            align-items: flex-end; 

            li{
                list-style-type: none;

                div{

                    img{
                        width: 30px;
                        height: 30px;

                    }
                }
            }
        }
      
    }

`

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
        <StyledNav>
            <nav className='containerNav'>
                <ul>
                    {
                        links.map((item, index) => (
                            <li key={index}>
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
    )
}

export default NavBar;
