import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router";  // assuming you're using react-router for navigation


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #898989);
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  height: 100%;
  background: linear-gradient(to bottom, #ffffff, #D9D9D9);

`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #11366d;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 100px;
  margin-left: 0px;
  justify-content: center;  // Centers the buttons horizontally
  align-items: center;      // Centers the buttons vertically
`;

const ContactPage: React.FC = () => (
  <PageWrapper>
    <ContentWrapper>
      <Header />
      <ButtonWrapper>
        <Link to="/privacy-policy">
          <Button>개인정보처리방침</Button>
        </Link>
        <Link to="/service-policy">
          <Button>서비스이용약관</Button>
        </Link>
      </ButtonWrapper>
    </ContentWrapper>
  </PageWrapper>
);

export default ContactPage;



