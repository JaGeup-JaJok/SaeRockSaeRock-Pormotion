import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #11366D;
  color: white;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <div>
      <h4>Be With You</h4>
      <p>Korea, Dongguk University</p>
      <p>info@email.com</p>
      <p>+82 123-456-7890</p>
    </div>
    <div>
      <h4>Developers</h4>
      <ul>
        <li>Im Hyoeun</li>
        <li>Choi Woosung</li>
        <li>Park Joyoung</li>
        <li>Kim Yumin</li>
      </ul>
    </div>
  </FooterContainer>
);

export default Footer;
