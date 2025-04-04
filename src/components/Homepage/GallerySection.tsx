import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Phone0 from "../../assets/images/phone0.svg";
import Phone2 from "../../assets/images/phone2.svg";
import Phone3 from "../../assets/images/phone3.svg";
import Phone4 from "../../assets/images/phone4.svg";

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
`;

const SliderWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: fit-content;
  transition: transform 0.8s ease-in-out;
`;

const Card = styled.div`
  flex: 0 0 calc(100% / 1.9);
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const PhoneImage = styled.img`
  width: 300px;
  height: 400px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0;
  line-height: 1.5;
`;

const CardTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #222;
  margin: 0 0 3rem;
`;

const GallerySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const cards = [
    { image: Phone0, title: "기록을 통해 오늘을 기억해요", text: "페스티벌의 상세기록을 작성하며 그 날의 감상평을 남겨 더 오래오래 기억해요! 달력에는 페스티벌 포스터가 생성돼서 나만의 페스티벌 달력을 꾸밀 수 있어요." },
    { image: Phone2, title: "예매 내역을 간편하게 확인해요", text: "페스티벌의 예매기록을 불러와서 더 빠르고 간편하게 예매 내역을 확인할 수 있어요! 페스티벌의 아티스트와 노래 추가를 통해 미리 노래를 듣고 때창 연습도 가능해요." },
    { image: Phone3, title: "나와 자주 만난 페스티벌과 아티스트를 확인해요", text: "내적 친밀감이 생겨버린 아티스트를 확인해볼 수 있어요. 특정 페스티벌에 대한 애정도 확인해볼 수 있어요." },
    { image: Phone4, title: "다양한 테마 경험", text: "특별한 순간을 더욱 의미 있게 기록하세요." },
  ];

  useEffect(() => {
    // 자동 슬라이드
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  useEffect(() => {
    // 스크롤 감지하여 제목 페이드 인
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
    };
  }, []);

  return (
    <GalleryContainer>
      <Title ref={titleRef} $isVisible={isVisible}>새록새록이란?</Title>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <SliderWrapper
          style={{
            transform: `translateX(-${currentIndex * (100 / 1.8)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <Card key={index}>
              <PhoneImage src={card.image} alt="기록 화면" />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </CardContent>
            </Card>
          ))}
        </SliderWrapper>
      </div>
    </GalleryContainer>
  );
};

export default GallerySection;
