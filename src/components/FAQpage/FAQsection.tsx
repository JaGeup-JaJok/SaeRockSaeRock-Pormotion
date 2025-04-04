import React, { useState } from "react";
import styled from "styled-components";
import QuestionBox from "./QuestionBox";

const questionsData = [
  { question: "질문이 이거입니다1", answer: "이것은 답변입니다." },
  { question: "질문이 이거입니다2", answer: "이것은 답변입니다." },
  { question: "질문이 이거입니다3", answer: "이것은 또 다른 답변입니다." },
  { question: "질문이 이거입니다4", answer: "이것은 네 번째 답변입니다." },
  { question: "질문이 이거입니다3", answer: "이것은 또 다른 답변입니다." },
  { question: "질문이 이거입니다4", answer: "이것은 네 번째 답변입니다." },
];

const ITEMS_PER_PAGE = 2;

const FAQSection: React.FC = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(questionsData.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <PageContainer>
      <Title>자주 묻는 질문</Title>
      <QuestionsContainer>
        {questionsData
          .slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)
          .map((q, index) => (
            <QuestionBox key={index} question={q.question} answer={q.answer} />
          ))}
      </QuestionsContainer>
      <Pagination>
        <PageButton disabled={page === 0} onClick={handlePrev}>
          이전
        </PageButton>
        <PageIndicator>
          {page + 1} / {totalPages}
        </PageIndicator>
        <PageButton disabled={page === totalPages - 1} onClick={handleNext}>
          다음
        </PageButton>
      </Pagination>
    </PageContainer>
  );
};

export default FAQSection;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #11366d;
  margin-bottom: 35px;
  align-self: center;
  padding-left: 16px;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 80%;
  align-self: center;

`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  border: none;
  color: black;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  background:none;

  &:disabled {
    color: #6B6B6B;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #11366d;
`;
