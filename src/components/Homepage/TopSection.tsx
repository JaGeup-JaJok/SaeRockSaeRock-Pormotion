import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import MusicLogo from "../../assets/images/MusicLogo.svg"; // 로고 추가

const Section = styled.section`
  text-align: center;
  padding-bottom: 12rem;
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }
`;

const Logo = styled.img<{ position: "top-left" | "bottom-right" }>`
  position: absolute;
  width: 100px;
  opacity: 0.3;
  animation: fadeIn 1.5s ease-in-out;

  ${({ position }) =>
    position === "top-left"
      ? `
    top: 0rem;
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
  @media (max-width: 768px) {
    width: 60px;
    ${({ position }) =>
    position === "top-left"
      ? `
    top: 0rem;
    left: 2rem;
    transform: rotate(-15deg);
  `
      : `
    bottom: 6rem;
    right: 2rem;
    transform: rotate(20deg);
  `}
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p<{ $isVisible: boolean }>`
  font-size: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  transition: opacity 1s ease-in-out 0.3s;
  white-space: pre-line;  /* Allows line breaks based on content */
  
  ${({ $isVisible }) =>
    $isVisible &&
    `
    opacity: 1;
  `}
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    white-space: normal; 
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
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;
const FriendAddText = styled.p`
  font-size: 0.7rem;
  color: #11366D;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const TopSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const handleAddFriend = () => {
    window.open("https://pf.kakao.com/_XZdwn", "_blank");
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }
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
      
      <Button onClick={handleAddFriend}>카카오톡 채널 추가하기 →</Button>
    <FriendAddText>
        친구 추가하면 출시 알림을 받을 수 있어요!
      </FriendAddText></Section>
  );
};

export default TopSection;
