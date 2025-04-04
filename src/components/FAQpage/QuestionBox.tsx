import React from "react";
import styled from "styled-components";

interface QuestionBoxProps {
  question: string;
  answer: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question, answer }) => {
  return (
    <Container>
      <Question>
        <span>Q.</span> {question}
      </Question>
      <AnswerBox>{answer}</AnswerBox>
    </Container>
  );
};

export default QuestionBox;

const Container = styled.div`
  background: #fff;
  padding: 50px 30px ;
 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Question = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 25px;
  
  span {
    font-weight: normal;
    font-size: 20px;
  }
`;

const AnswerBox = styled.div`
  width: 97%;
  min-height: 120px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  color: #333;
  white-space: pre-line;
  display: flex;
  align-items: center;
`;
