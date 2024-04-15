import React from 'react'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
  
  body {
    font-family: 'Balsamiq Sans', cursive;
  }
`;


// Estilos para la barra de estado del dispositivo
const DeviceStatusBar = styled.div`
  background-color: #f8f9fa; 
  padding: 5px 10px; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
`;


// Icono  para la red, wifi y batería
const Icon = styled.img`
margin-right: 10px; 
`;

// Estilos para la hora en la barra de estado
const Time = styled.span`
  font-size: 1em; 
  color: #333; 

`;

const ProfileImageOverlay = styled.img`
  border-radius: 50%; 
  width: 75px; 
  height: 75px; 
  object-fit: cover;
  border: 3px solid white; 
  position: absolute; 
  bottom: 220px;  
  left: 50%; 
  transform: translateX(-50%); 
  top: 250px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  background:  radial-gradient(50% 50% at 50% 50%, rgba(255, 118, 116, 0.6) 0%, rgba(255, 118, 116, 0) 100%),
  rgba(248, 248, 248, 1);
  width: 428px; 
  max-width: 600px; 
  margin: auto; 
`;

const ProfileImage = styled.img`
  border-radius: 20px; 
  width: 100%; 
  height: auto; 
  object-fit: cover; 
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
`;



const UserName = styled.h2`
  font-size: 1.5em; 
  margin-top: 40px;
  color: #333;
  font-family: 'Balsamiq Sans', cursive;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%; 
  margin-top: -110px;
  font-family: 'Balsamiq Sans', cursive;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center; // Centra los botones horizontalmente
  gap: 20px; // Espacio entre los botones
  margin-top: 20px; // Ajusta este valor según sea necesario para la posición vertical
`;

const FollowButton = styled.button`
background: linear-gradient(92.69deg, #EB5E5C -0.64%, #FF7674 101.09%);
color: white;
border: none;
padding: 5px 80px; // Aumenta el padding horizontal para que sean más alargados
font-size: 20px; // El tamaño de fuente solicitado
border-radius: 10px; // Ajusta según el diseño
cursor: pointer;
margin-top: 80px;
font-family: 'Balsamiq Sans', cursive;
`;

const MessageButton = styled(FollowButton)`
 background: linear-gradient(92.69deg, #EB5E5C -0.64%, #FF7674 101.09%);
`;

// Estilos para los tabs de navegación de fotos, videos,
const ImageSectionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: rgba(255, 255, 255, 1);
width: 428px;
max-width: 600px; 
border-radius: 20px;
padding: 20px;
box-shadow: 0 4px 8px rgba(0,0,0,0.1); // Sombra para dar profundidad
margin: auto;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  max-width: 428px; 
  margin: auto; 
  font-family: 'Balsamiq Sans', cursive;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid pink;
  }

  // Estilo activo
  &.active {
    border-bottom: 2px solid pink;
  }
  font-family: 'Balsamiq Sans', cursive;
`;

// Estilos para la grilla de imágenes
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 15px;
  margin-top: 20px;
  max-width: 428px; 
  margin: auto; 
`;

const ImageWrapper = styled.div`
  border-radius: 15px;
  overflow: hidden;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 190px; 
  height: 190px; 
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;


// Componente de perfil
const UserProfile = () => {
  return (
    <>
      <DeviceStatusBar>
        <Icon src="/public/connection.png" alt="WiFi" />
        <Time>9:41</Time>
        <div>
          <Icon src="/public/red.png" alt="Signal" />
          <Icon src="/public/battery.png" alt="Battery" />
        </div>
      </DeviceStatusBar>
      <ProfileContainer>
        <ProfileImage src="/public/blackpink-img-perfil.png" alt="Perfil" />
        <ProfileImageOverlay src="/public/img-perfil-small.png" alt="Perfil pequeño" />
        <UserName>Jennie Kim</UserName>
        <span>J. Hello Guys</span>
          <span>Follow me and like my post</span>
        <UserInfo>
          <span>10.7M Followers</span>
          <span>108.3M Likes</span>
          {/* <span>J. Hello Guys</span>
          <span>Follow me and like my post</span> */}
        </UserInfo>
        <div>
        <ButtonGroup>
          <FollowButton>Follow</FollowButton>
          <MessageButton>Message</MessageButton>
          </ButtonGroup>
        </div>
      </ProfileContainer>
      <ImageSectionContainer>
      <Tabs>
        <Tab className="active">Photos</Tab>
        <Tab>Videos</Tab>
        <Tab>Album</Tab>
        <Tab>Tag</Tab>
      </Tabs>
      <ImageGrid>
        {/* Las imágenes deben ser reemplazadas por las reales */}
        <ImageWrapper><Image src="/public/primera-img-izquierda.png" alt="Gallery image 1" /></ImageWrapper>
        <ImageWrapper><Image src="/public/segunda-img-derecha.png" alt="Gallery image 2" /></ImageWrapper>
        <ImageWrapper><Image src="/public/tercera-img.png" alt="Gallery image 3" /></ImageWrapper>
        <ImageWrapper><Image src="/public/cuarta-img.png" alt="Gallery image 4" /></ImageWrapper>
        <ImageWrapper><Image src="/public/quinta-img.png" alt="Gallery image 4" /></ImageWrapper>
        <ImageWrapper><Image src="/public/sexta-img.png" alt="Gallery image 4" /></ImageWrapper>
      </ImageGrid>
      </ImageSectionContainer>
    </>
  );
};

export default UserProfile;



