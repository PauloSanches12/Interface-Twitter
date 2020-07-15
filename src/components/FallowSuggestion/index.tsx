import React from 'react';

import { Container, Avatar, Info, FallowButton } from './styles';

interface Props {
    name: string;
    nickname: string;
}

const FallowSuggestion: React.FC<Props> = ({
    name, nickname
}) => {
  return (
      <Container>
          <div>
              <Avatar />

              <Info>
                <strong>{name}</strong>
                <span>{nickname}</span>
              </Info>
          </div>

          <FallowButton outlined >Seguir</FallowButton>
      </Container>
  );
}

export default FallowSuggestion;