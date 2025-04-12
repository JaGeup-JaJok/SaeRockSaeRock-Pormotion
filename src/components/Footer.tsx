import React from "react";
import styled from "styled-components";
import FacebookIcon from "../assets/images/Facebook.svg";
import InstagramIcon from "../assets/images/Instagram.svg";
import TwitterIcon from "../assets/images/Twitter.svg";
import LocationIcon from "../assets/images/Location.svg";
import MailIcon from "../assets/images/Mail.svg";
import TelephoneIcon from "../assets/images/Telephone.svg";

const FooterContainer = styled.footer`
  background: #0c2d62;
  color: white;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const IconLink = styled.a`
  display: inline-block;
`;

// 이 부분이 모바일에서 숨김 처리됨
const ContactSection = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <div>
      <p>
        더 많은 정보를 얻고 싶으시다면 <br />
        하단 아이콘을 클릭해주세요
      </p>
      <SocialIcons>
        <IconLink
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={FacebookIcon} alt="Facebook" />
        </IconLink>
         <IconLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={InstagramIcon} alt="Instagram" />
        </IconLink>
        <IconLink
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={TwitterIcon} alt="Twitter" />
        </IconLink>
       
      </SocialIcons>
    </div>
    <div></div>
    <ContactSection>
      <h3>Be With You</h3>
      <p>
        <Icon src={LocationIcon} alt="Location" /> Korea, Dongguk University
      </p>
      <p>
        <Icon src={MailIcon} alt="Mail" /> Hello@Email.com
      </p>
      <p>
        <Icon src={TelephoneIcon} alt="Telephone" /> (+62) 123 456 789
      </p>
    </ContactSection>
  </FooterContainer>
);

export default Footer;
