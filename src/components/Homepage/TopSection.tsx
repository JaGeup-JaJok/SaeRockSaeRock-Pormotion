import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import MusicLogo from "../../assets/images/MusicLogo.svg"; // 로고 추가

const Section = styled.section`
  text-align: center;
  padding: 12rem 1rem;
  position: relative; /* MusicLogo 배치를 위한 relative 설정 */
`;

const Logo = styled.img<{ position: "top-left" | "bottom-right" }>`
  position: absolute;
  width: 100px;
  opacity: 0.3;
  animation: fadeIn 1.5s ease-in-out;

  ${({ position }) =>
    position === "top-left"
      ? `
    top: 8rem;
    left: 6rem;
    transform: rotate(-15deg);
  `
      : `
    bottom: 6rem;
    right: 6rem;
    transform: rotate(20deg);
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 0.3;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2<{ $isVisible: boolean }>`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  ${({ $isVisible }) =>
    $isVisible &&
    `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const Description = styled.p<{ $isVisible: boolean }>`
  font-size: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  transition: opacity 1s ease-in-out 0.3s;
  ${({ $isVisible }) =>
    $isVisible &&
    `
    opacity: 1;
  `}
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

const TopSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Logo src={MusicLogo} alt="Music Logo" position="top-left" />
      <Logo src={MusicLogo} alt="Music Logo" position="bottom-right" />
      <Title $isVisible={isVisible}>우리가 페스티벌을 기록하는 <br />새로운 방법</Title>
      <Description $isVisible={isVisible}>
        나의 페스티벌을 기록하기 위한 특별한 방법, 새록새록을 통해 더 특별한 하루를 즐겨보세요
      </Description>
      <Button>Download →</Button>
    </Section>
  );
};

export default TopSection;
