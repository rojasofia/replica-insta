import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../services/data";

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
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 118, 116, 0.6) 0%,
      rgba(255, 118, 116, 0) 100%
    ),
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h2`
  font-size: 1.5em;
  margin-top: 40px;
  color: #333;
  font-family: "Balsamiq Sans", cursive;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: -110px;
  font-family: "Balsamiq Sans", cursive;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center; // Centra los botones horizontalmente
  gap: 20px; // Espacio entre los botones
  margin-top: 20px; // Ajusta este valor según sea necesario para la posición vertical
`;

const FollowButton = styled.button`
  background: linear-gradient(92.69deg, #eb5e5c -0.64%, #ff7674 101.09%);
  color: white;
  border: none;
  padding: 5px 80px; // Aumenta el padding horizontal para que sean más alargados
  font-size: 20px; // El tamaño de fuente solicitado
  border-radius: 10px; // Ajusta según el diseño
  cursor: pointer;
  margin-top: 80px;
  font-family: "Balsamiq Sans", cursive;
`;

const MessageButton = styled(FollowButton)`
  background: linear-gradient(92.69deg, #eb5e5c -0.64%, #ff7674 101.09%);
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra para dar profundidad
  margin: auto;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  max-width: 428px;
  margin: auto;
  font-family: "Balsamiq Sans", cursive;
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
  font-family: "Balsamiq Sans", cursive;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Photos");
  const [content, setContent] = useState({
    photos: [],
    videos: [],
    albums: [],
    tags: [],
  });
  const [isFollowing, setIsFollowing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllContent = async () => {
      try {
        const response = await fetch(endpoints.posts);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Depuración: Muestra los datos en la consola
        console.log(data);

        const photos = data.filter((item) => item.type === "photo");
        const videos = data.filter((item) => item.type === "video");
        const albums = data.filter((item) => item.type === "album");
        const tags = data.filter((item) => item.type === "tag");

        setContent({ photos, videos, albums, tags });

        // Depuración: Muestra el contenido en la consola
        console.log({ photos, videos, albums, tags });
      } catch (error) {
        console.error("Error fetching content: ", error);
      }
    };

    getAllContent();
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
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
        <ProfileImageOverlay
          src="/public/img-perfil-small.png"
          alt="Perfil pequeño"
        />
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
              {isFollowing ? "Following" : "Follow"}
            </FollowButton>
            <MessageButton>Message</MessageButton>
          </ButtonGroup>
        </div>
      </ProfileContainer>
      <ImageSectionContainer>
        <Tabs>
          <Tab
            onClick={() => handleTabClick("Photos")}
            className={activeTab === "Photos" ? "active" : ""}
          >
            Photos
          </Tab>
          <Tab
            onClick={() => handleTabClick("Videos")}
            className={activeTab === "Videos" ? "active" : ""}
          >
            Videos
          </Tab>
          <Tab
            onClick={() => handleTabClick("Albums")}
            className={activeTab === "Album" ? "active" : ""}
          >
            Album
          </Tab>
          <Tab
            onClick={() => handleTabClick("Tags")}
            className={activeTab === "Tag" ? "active" : ""}
          >
            Tag
          </Tab>
          {/* Agrega más Tabs si son necesarios */}
        </Tabs>
        <ImageGrid>
          {activeTab === "Photos" &&
            content.photos.map((photo) => (
              <ImageWrapper
                key={photo.id}
                onClick={() => handleImageClick(photo.id)}
              >
                <Image src={photo.media} alt={photo.caption || "Photo image"} />
              </ImageWrapper>
            ))}

          {activeTab === "Videos" &&
            content.videos.map((video) => (
              <ImageWrapper
                key={video.id}
                onClick={() => handleImageClick(video.id)}
              >
                <video width="100%" controls>
                  <source src={video.media} type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              </ImageWrapper>
            ))}
          {activeTab === "Albums" &&
            content.albums.map((album) => (
              <ImageWrapper
                key={album.id}
                onClick={() => handleImageClick(album.id)}
              >
                <Image src={album.media} alt={`Album ${album.id}`} />
              </ImageWrapper>
            ))}
          {activeTab === "Tags" &&
            content.tags.map((tag) => (
              // Cada 'tag' es solo un post con type 'tag', así que mostramos su media directamente.
              <ImageWrapper
                key={tag.id}
                onClick={() => handleImageClick(tag.id)}
              >
                <Image src={tag.media} alt={tag.caption || `Tag ${tag.id}`} />
              </ImageWrapper>
            ))}
        </ImageGrid>
      </ImageSectionContainer>
    </>
  );
};

export default UserProfile;
