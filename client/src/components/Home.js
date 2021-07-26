import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import hero from './images/hero.jpg';

import { breakpoints, colors } from '../Theme';

const OuterContainer = styled.div`
  height: 100vh;
  color: ${colors.white};

  padding: 0 20px;

  ${breakpoints.md} {
    padding: 0 60px;
  }

  ${breakpoints.lg} {
    padding: 0 80px;
  }
`;

const InnerContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  padding-top: 120px;

  button {
    margin-top: 60px;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    padding: 12px 24px;
    font-weight: 100;
    background-color: ${colors.primaryDark};
    color: white;
    text-transform: uppercase;

    &:hover {
      background-color: ${colors.primaryExtraDark};
    }
  }

  button:hover {
    cursor: pointer;
  }
`;

const Hello = styled.div`
  font-size: 36px;
  color: ${colors.grey};
  font-weight: 600;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 80px;
  color: ${colors.white};
`;

const Job = styled.div`
  margin-top: 0px;
  font-weight: 200;
  font-size: 48px;
  color: ${colors.grey};
`;

const Home = () => {
  return (
    <OuterContainer id='home'>
      <InnerContainer>
        <Hello>Hi, my name is</Hello>
        <Name>Michael</Name>
        <Job>Web Developer</Job>
        <Link to='work' offset={-60} smooth={true} spy={true}>
          <button>
            View my work <i class='bi bi-arrow-right'></i>
          </button>
        </Link>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Home;
