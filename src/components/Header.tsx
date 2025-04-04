import React from "react";
import { useNavigate } from "react-router-dom";
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
    gap: 3rem;
    list-style: none; 
    padding: 0; 
    margin: 0; 
  }
  
  li {
    position: relative;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease-in-out, transform 0.2s ease-out;
    cursor: pointer;
    
    &:hover {
      color: #11366D;
      transform: scale(1.1);
    }
    
    &:active {
      transform: scale(0.95);
    }
  }
  
  a {
    color: black;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    
    &:hover {
      color: #11366D;
    }
  }
`;

const Button = styled.button`
  background: #11366D;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, filter 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(17, 54, 109, 0.3);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
const LogoImage = styled.img`
  width: 80px;
  height: auto;
`;

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="Main Logo" />
      <Nav>
        <ul>
          <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/notice")}>NOTICE</li>
          <li onClick={() => navigate("/faq")}>FAQ</li>
          <li><Button onClick={() => navigate("/contact")}>Contact Us →</Button></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
