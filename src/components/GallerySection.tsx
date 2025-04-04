import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.section`
  padding: 2.5rem;
  background: #f3f4f6;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const GallerySection: React.FC = () => (
  <GalleryContainer>
    <h3>Gallery</h3>
    <p>새록새록이란?</p>
    <Grid>
      <Card>이미지 1</Card>
      <Card>이미지 2</Card>
      <Card>이미지 3</Card>
    </Grid>
  </GalleryContainer>
);

export default GallerySection;
