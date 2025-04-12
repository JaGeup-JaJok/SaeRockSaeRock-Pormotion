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

const AnimatedSection = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
  transition: opacity 0.8s ease, transform 0.8s ease;
`;

const LogoWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
  transition: opacity 2s ease-out, transform 2s ease-out;  // 2초에 걸쳐서 애니메이션 적용
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Logo = styled.img`
  width: 60%;
  height: 60vh;
  background: none;

  @media (max-width: 768px) {
    width: 80%;
    height: 50vh;
    margin-top: 5rem;
  }
`;

const HomePage: React.FC = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);  // 로고가 처음에 보이도록 설정
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);

  // useEffect 내에서 로고의 애니메이션을 처리
  useEffect(() => {
    // 로고가 서서히 사라지게 처리
    const timer = setTimeout(() => {
      setIsLogoVisible(false);  // 2.5초 후에 로고를 숨기기
      setIsMainContentVisible(true);  // 메인 콘텐츠를 보이게 설정
    }, 2500);  // 2.5초 후에 실행

    return () => clearTimeout(timer);  // 타이머 정리
  }, []);  // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        {/* 로고가 보일 때만 표시되도록 */}
        {isLogoVisible && (
          <LogoWrapper $isVisible={isLogoVisible}>
            <Logo src={Logo2} alt="Music Logo" />
          </LogoWrapper>
        )}

        <AnimatedSection $isVisible={isMainContentVisible}>
          <Logo2>
            </Logo2><TopSection />
          <GallerySection />
        </AnimatedSection>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;
