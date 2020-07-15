import React from 'react';
import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Fallowage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>
              <h1>Paulo Sérgio</h1>
              <h2>@paulosergio10</h2>
              <p>
                Developer by <a target="_blank" href="https://github.com/PauloSanches12?tab=repositories">@PauloSérgio</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Palmas, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 03 de novembro de 1998
                  </li>
              </ul>

              <Fallowage>
                  <span>
                      seguindo <strong>120</strong>
                  </span>

                  <span>
                    <strong>240 </strong> seguidores 
                  </span>
              </Fallowage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;