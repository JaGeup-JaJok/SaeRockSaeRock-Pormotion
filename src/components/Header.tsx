import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/MainLogo.svg";

const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top:0rem;
    right: 0;
    padding-top:8rem;
    height: 100vh;
    width: 250px;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 999;

    ul {
      flex-direction: column;
      padding: 5rem 1.5rem 1rem;
      gap: 1.5rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;


const Button = styled.button`
  background: #11366d;
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
  cursor: pointer;

  @media (max-width: 768px) {
    width: 60px; // 모바일에서 더 작게
  }
`;


const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: black;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 1000;
  }
`;



const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="Main Logo" onClick={() => navigate("/")} />
      <HamburgerButton onClick={() => setIsOpen((prev) => !prev)}>
        ☰
      </HamburgerButton>
      <Nav $isOpen={isOpen}>
        <ul>
           {/* <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/notice")}>NOTICE</li>
          <li onClick={() => navigate("/faq")}>FAQ</li>  */}
          <li>
            <Button onClick={() => navigate("/contact")}>terms →</Button>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
