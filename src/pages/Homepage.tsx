import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import TopSection from "../components/Homepage/TopSection";
import GallerySection from "../components/Homepage/GallerySection";
import Footer from "../components/Footer";
import Logo2 from "../assets/images/logo2.svg";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #898989);
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-bottom: 20px;
  background: linear-gradient(to bottom, #ffffff, #d9d9d9);
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem; // 아래 여백만 살짝 줄 정도만
`;

const Logo = styled.img`
  width: 60%;
  height: 60vh;
  background: none;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 80%;
    height: 50vh;
    margin-top: 2rem;
  }
`;


const HomePage: React.FC = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoVisible(false);
      setIsMainContentVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
      
          <LogoWrapper>
            <Logo src={Logo2} alt="Music Logo" />
          </LogoWrapper>
   
        
        <TopSection />
        <GallerySection />
      </ContentWrapper>
      {/* <Footer /> */}
    </PageWrapper>
  );
};

export default HomePage;
