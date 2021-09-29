import React from "react";
import styled from "styled-components";

const Art = ({ photos }) => {
  const names = ["first", "second", "third", "fourth", "fifth", "sixth"];
  return (
    <Container>
      {photos.map((image, index) => (
        <Image name={names[index]} key={index} src={image} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  grid-area: content;

  /* height: auto; */
  width: 100%;
  /* padding-left: 242px;
  padding-right: 242px; */
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "first second second"
    "third third fourth"
    "fifth sixth fourth";
  column-gap: 15px;
  row-gap: 15px;
  padding: 10px;
`;

const Image = styled.img`
  grid-area: ${(props) => props.name};
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: -4px 4px 8px #777;
`;
export default Art;
