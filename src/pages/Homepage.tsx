import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import TopSection from "../components/Homepage/TopSection";
import GallerySection from "../components/Homepage/GallerySection";
import Footer from "../components/Footer";
import Logo2 from "../assets/images/logo2.svg"

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

const Logo = styled.img`
  width: 60%;
  height: auto;
  margin: 2rem auto 1rem;
  display: block;
  background:none;

  @media (max-width: 768px) {
    width: 150px;
    margin: 1.5rem auto;
  }
`;
const HomePage: React.FC = () => (
  <PageWrapper>
    <ContentWrapper>
      <Header />
      <Logo src={Logo2} alt="Music Logo"  />
      <TopSection />
      <GallerySection />
    </ContentWrapper>
    <Footer />
  </PageWrapper>
);

export default HomePage;
