import React from 'react';
import styled from 'styled-components';

import { breakpoints, colors } from '../Theme';

const OuterContainer = styled.div`
  height: 100vh;

  padding: 0 20px;

  ${breakpoints.md} {
    padding: 0 60px;
  }

  ${breakpoints.lg} {
    padding: 0 100px;
  }
`;

const InnerContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  border: 1px solid cyan;
  height: 100vh;
`;

const Title = styled.h2``;

const Body = styled.div``;

const Work = () => {
  return (
    <OuterContainer id='work'>
      <InnerContainer>
        <Title>Work</Title>
        <Body></Body>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Work;
