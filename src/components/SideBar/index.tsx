import React from 'react';
import List from '../List';
import FallowSuggestion from '../FallowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box';
import { Container, SearchWrapper, SearchInput,SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>
          <StickyBox>
          <Body>
           <List 
            title="Talvez você curta"
            elements={[ 
              <FallowSuggestion 
                name="Machado de Assis"
                nickname="@machadoassis"
              />,

              <FallowSuggestion 
                name="Vinicius de Moraes"
                nickname="@viniciusmoraes"
              />,

              <FallowSuggestion 
                name="Oswald de Andrade"
                nickname="@oswaldandrade"
              />
             ]}
           />

          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
           />

          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
           />

          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
           />

          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
           />
          </Body>
        </StickyBox>
      </Container>
  );
}

export default SideBar;