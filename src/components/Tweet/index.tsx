import React from 'react';

import { 
     Container,
     Retweeted,
     RetweeterIcon,
     Body,
     Avatar,
     Content,
     Header,
     Dot,
     Description,
     ImageContent,
     Icons,
     Status,
     CommentIcon,
     RetweetIcon,
     LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return(
      <Container>
          <Retweeted>
              <RetweeterIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Paulo Sérgio</strong>
                      <span>@PauloSérgio</span>
                      <Dot />
                      <time>14 de jul</time>
                  </Header>

                  <Description>A noite vai bilhar!</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          20
                      </Status>

                      <Status>
                          <RetweetIcon />
                          20
                      </Status>
                      <Status>
                          <LikeIcon />
                          516
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;
