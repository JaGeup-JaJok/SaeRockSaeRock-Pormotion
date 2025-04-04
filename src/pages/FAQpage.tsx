import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import FAQsection from "../components//FAQpage/FAQsection";
import Footer from "../components/Footer";


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #898989);
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-bottom: 20px;
  height: 100%;
  background: linear-gradient(to bottom, #ffffff, #D9D9D9);

`;



const HomePage: React.FC = () => (
  <PageWrapper>
    <ContentWrapper>
      <Header />
      <FAQsection/>
    </ContentWrapper>
    <Footer />
  </PageWrapper>
);

export default HomePage;
