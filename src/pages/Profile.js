import React from "react";
import styled from "styled-components";
import Art from "../components/Art";
import ProfileData from "../components/ProfileData";

const Container = styled.div`
  height: 100%;
  width: 70%;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

const Profile = ({ photos }) => {
  return (
    <Container>
      <ProfileData />
      <Art photos={photos.images} />
    </Container>
  );
};

export default Profile;
