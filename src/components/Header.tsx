import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/MainLogo.svg"
const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    display: flex; 
    align-items: center;
    display: flex;
    gap: 3rem;
    list-style: none; 
    padding: 0; 
    margin: 0; 
  }
  a {
    color: black;
    text-decoration: none;
  }
`;


const Button = styled.button`
  background: #11366D;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 80px;
  height: auto;
`;

const Header: React.FC = () => (
  <HeaderContainer>
  <LogoImage src={Logo} alt="Main Logo" />
    <Nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">NOTICE</a></li>
        <li><a href="#">FAQ</a></li>
        <li><Button>Contact Us →</Button></li>
      </ul>
    </Nav>
  </HeaderContainer>
);

export default Header;
