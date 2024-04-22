import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';



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

//desarrollo de funcionalidades tags
// Estilos para los tabs activos e inactivos
const ActiveTab = styled(Tab)`
  border-bottom: 2px solid pink;
`;

// Componente de perfil
const UserProfile = () => {
   // Estado para manejar el tab activo
   const [activeTab, setActiveTab] = useState('Photos');
   const [isFollowing, setIsFollowing] = useState(false);
   const navigate = useNavigate(); // Hook para la navegación

   // Función para cambiar el tab activo
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing); // Cambia el estado de seguir a no seguir y viceversa
  };

  // Función para manejar el clic en una imagen, video o tag
  const handleImageClick = (id) => {
    navigate(`/details/${id}`); // Usa el ID de la imagen para la navegación
  };
  
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
        <FollowButton onClick={handleFollowClick}>
          {isFollowing ? 'Following' : 'Follow'}
        </FollowButton>
          <MessageButton>Message</MessageButton>
          </ButtonGroup>
        </div>
      </ProfileContainer>
      <ImageSectionContainer>
      <Tabs>
          <Tab onClick={() => handleTabClick('Photos')} className={activeTab === 'Photos' ? 'active' : ''}>Photos</Tab>
          <Tab onClick={() => handleTabClick('Videos')} className={activeTab === 'Videos' ? 'active' : ''}>Videos</Tab>
          <Tab onClick={() => handleTabClick('Album')} className={activeTab === 'Album' ? 'active' : ''}>Album</Tab>
          <Tab onClick={() => handleTabClick('Tag')} className={activeTab === 'Tag' ? 'active' : ''}>Tag</Tab>
        </Tabs>
      <ImageGrid>
      {activeTab === 'Photos' && (
            <>
              {/* Ejemplos de imágenes */}
              <ImageWrapper onClick={() => handleImageClick('1')}><Image src="https://i.pinimg.com/564x/8e/76/0f/8e760fb61a10a0e3e53e9b78da659d8c.jpg" alt="Kitten 1" /></ImageWrapper>
              <ImageWrapper onClick={() => handleImageClick('2')}  ><Image src="https://rare-gallery.com/thumbs/325591-Jennie-BLACKPINK-Photoshoot-4K-iphone-wallpaper.jpg" alt="Kitten 3" /></ImageWrapper>
              <ImageWrapper onClick={() => handleImageClick('3')}  ><Image src="https://mcdn.wallpapersafari.com/335/28/61/ZxJM2z.jpg" alt="Kitten 3" /></ImageWrapper>
              <ImageWrapper onClick={() => handleImageClick('4')}  ><Image src="https://wallpapercave.com/wp/wp12886525.jpg" alt="Kitten 4" /></ImageWrapper>
              {/* Añadir más imágenes según sea necesario */}
            </>
          )}
          {activeTab === 'Videos' && (
            <>
              {/* Ejemplos de videos */}
              <ImageWrapper onClick={() => handleImageClick('5')}>
                <video width="100%" height="auto" controls>
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </ImageWrapper>
              {/* Añadir más videos según sea necesario */}
            </>
          )}
          {activeTab === 'Album' && (
            <>

              <ImageWrapper onClick={() => handleImageClick('6')}><Image src="https://i.pinimg.com/564x/0d/62/15/0d6215dbb4d6f824787ba192f1dc7a84.jpg" alt="Album 1" /></ImageWrapper>
              <ImageWrapper onClick={() => handleImageClick('7')}><Image src="https://i.pinimg.com/564x/d0/71/b6/d071b61fcd51cc0677359d6a35ed11d5.jpg" alt="Album 1" /></ImageWrapper>
              
            </>
          )}
          {activeTab === 'Tag' && (
            <>
              <ImageWrapper onClick={() => handleImageClick('8')}><Image src="https://i.pinimg.com/564x/ee/58/27/ee5827b6b2f0672e98347c2e5dda88af.jpg" alt="Tag 1" /></ImageWrapper>
              <ImageWrapper onClick={() => handleImageClick('9')}><Image src="https://i.pinimg.com/564x/00/fa/d3/00fad3ecb39ed16b6c547fb40f5f9039.jpg" alt="Tag 2" /></ImageWrapper>
              <ImageWrapper onClick={() => handleImageClick('10')}><Image src="https://i.pinimg.com/236x/44/95/45/449545e213492a3a05ec20dffedc9f50.jpg" alt="Tag 3" /></ImageWrapper>
            </>
          )}
      </ImageGrid>
      </ImageSectionContainer>
    </>
  );
};

export default UserProfile;