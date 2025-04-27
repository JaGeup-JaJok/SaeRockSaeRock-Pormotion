import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Phone0 from "../../assets/images/phone0.svg";
import Phone2 from "../../assets/images/phone2.svg";
import Phone3 from "../../assets/images/phone3.svg";
import Phone4 from "../../assets/images/phone4.svg";
import ArrowImg from "../../assets/images/arrow.svg";

// 👉 SVG 버튼 이미지
import LeftIcon from "../../assets/images/PrevButton.svg";
import RightIcon from "../../assets/images/NextButton.svg";
import StopIcon from "../../assets/images/StopButton.svg";
import PlayIcon from "../../assets/images/StartButton.svg";

const Arrow = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-left: 60px;
`;

const GalleryContainer = styled.section`
  padding-bottom: 5rem;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h3<{ $isVisible: boolean }>`
  text-align: left;
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: bold;
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
    font-size: 1.3rem;
  }
`;

const SlideItem = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const SliderWrapper = styled.div<{ $index: number }>`
  display: flex;
  transform: ${({ $index }) => `translateX(-${$index * 100}%)`};
  transition: transform 0.8s ease-in-out;
  width: 100%;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  width: 80%;
  height: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    width: 80%;
  }
`;

const PhoneImage = styled.img`
  width: 300px;
  height: 400px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const CardTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #222;
  margin: 0 0 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 0 1rem;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 2rem;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border: none; /* ✅ border 완전 제거 */
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%; /* ✅ 버튼 크기에 딱 맞게 */
    height: 100%;
    object-fit: contain; /* 이미지가 왜곡되지 않도록 */
  }
`;


const GallerySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const cards = [
    {
      image: Phone0,
      title: "나만의 감상으로 다시 쓰는 그날 - 캘린더",
      text: "페스티벌에 다녀온 날, 그날의 감상을 그대로 적어내려 보세요. 다듬어지지 않은 문장일수록 빛나는 하루를 생생하게 남길 수 있을 거예요. 페스티벌 사진을 추가해서 나만의 페스티벌 달력도 만들 수 있어요.",
    },
    {
      image: Phone2,
      title: "저희 또 뵙네요? - 통계",
      text: "원래 좋아했던 마음부터, 알아채지 못했던 마음까지 새록새록이 알려드릴게요. 지금껏 방문한 페스티벌은 물론, 페스티벌에서 나와 만난 아티스트들을 확인할 수 있어요. 몰랐지만 열 번 넘게 만난 아티스트가 있다면, 사랑인가요~",
    },
    {
      image: Phone3,
      title: "추억과 기대를 담아드려요 - 플레이리스트",
      text: "페스티벌에서 들었던 대로, 또는 페스티벌을 기다리며 현장감을 느끼고 싶을 때 새록새록을 찾아주세요. 새록새록에서는 페스티벌의 이야기를 그대로 담은 페스티벌 플레이리스트를 만들고 공유할 수 있어요. 이대로 그날을 향해 가볼까요?",
    },
    {
      image: Phone4,
      title: "페스티벌 속 함께인 사람들 - 커뮤니티",
      text: "페스티벌 당일, 페스티벌이나 아티스트에 대한 정보를 몰라 어려웠던 경험이 있으신가요? 공연 기간동안 열리는 전용 커뮤니티인 페스티펑에서 페스티벌의 현황이나 정보를 묻고 답할 수 있어요. 혹시 공연장 근처에 나만 아는 맛집이 있다면 공유해보세요.",
    },
  ];

  // Auto slider
  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAuto, cards.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
  
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
  
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      // ✅ 아무것도 반환하지 않음 (void)
    };
  }, []);
  

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handleStop = () => setIsAuto(false);
  const handlePlay = () => setIsAuto(true);

  return (
    <GalleryContainer>
      <Title ref={titleRef} $isVisible={isVisible}>
        새록새록이란?
      </Title>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <SliderWrapper $index={currentIndex}>
          {cards.map((card, index) => (
            <SlideItem key={index}>
              <Card>
                <PhoneImage src={card.image} alt="기록 화면" />
                <CardContent>
                  <CardTitle>{card.title}</CardTitle>
                  <CardText>{card.text}</CardText>
                </CardContent>
              </Card>
            </SlideItem>
          ))}
        </SliderWrapper>
      </div>

      {/* 버튼 */}
      <ButtonGroup>
        <IconButton onClick={handlePrev}>
          <img src={LeftIcon} alt="Prev" />
        </IconButton>
        {isAuto ? (
          <IconButton onClick={handleStop}>
            <img src={StopIcon} alt="Stop" />
          </IconButton>
        ) : (
          <IconButton onClick={handlePlay}>
            <img src={PlayIcon} alt="Play" />
          </IconButton>
        )}
        <IconButton onClick={handleNext}>
          <img src={RightIcon} alt="Next" />
        </IconButton>
      </ButtonGroup>
    </GalleryContainer>
  );
};

export default GallerySection;
