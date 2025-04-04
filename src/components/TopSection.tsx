import React from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 5rem 1rem;

  h2 {
    font-size: 2rem;      
    font-weight: 900;    
    margin-bottom: 2.5rem;
  }

  p {
    font-size: 1rem;    
    margin-bottom: 2rem;
  }
`;


const Button = styled.button`
  background: #11366D;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

const TopSection: React.FC = () => (
  <Section>
    <h2>우리가 페스티벌을 기록하는 <br></br>새로운 방법</h2>
    <p>나의 페스티벌을 기록하기 위한 특별한 방법, 새록새록을 통해 더 특별한 하루를 즐겨보세요</p>
    <Button>Download →</Button>
  </Section>
);

export default TopSection;
