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

const InnerContainer = styled.div``;

const Title = styled.h2``;

const Body = styled.div``;

const Contact = () => {
  return (
    <OuterContainer id='contact'>
      <InnerContainer>
        <Title>Contact</Title>
        <Body></Body>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Contact;
