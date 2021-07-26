import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import { breakpoints, colors } from '../Theme';

const OuterContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #001020;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  padding: 0 20px;

  ${breakpoints.md} {
    padding: 0 60px;
  }

  ${breakpoints.lg} {
    padding: 0 100px;
  }
`;

const InnerContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.white};

  &:hover {
    cursor: pointer;
  }
`;

const Nav = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  color: ${colors.grey};
  font-weight: 300;

  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    margin: 0 12px;

    &:hover {
      cursor: pointer;
      color: ${colors.white};
    }
  }
`;

const Header = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <Logo>
          <Link to='home' offset={-60}>
            Michael Lai
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link
                activeClass='active'
                to='home'
                offset={-60}
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            {/*   <li>
              <Link
                activeClass='active'
                to='about'
                offset={-60}
               
                spy={true} smooth={true}
              >
                About
              </Link>
            </li> */}
            <li>
              <Link to='work' offset={-60} spy={true} smooth={true}>
                Work
              </Link>
            </li>
            <li>
              <Link to='contact' offset={-60} spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Header;
