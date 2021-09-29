import React from "react";
import styled from "styled-components";
import ImageUrl from "../resources/profilePhoto.png";

const ProfileData = () => {
  return (
    <Container>
      <Avatar>
        <ProfileContainer>
          <ProfilePicture src={ImageUrl} />
          <NameP>Rodney Cotton</NameP>
          <Location>Helsinki, Finland</Location>
        </ProfileContainer>
        <StatsContainer>
          <Stat>
            <Value>100</Value>
            <Name>Posts</Name>
          </Stat>
          <Stat>
            <Value>2,242</Value>
            <Name>Followers</Name>
          </Stat>
          <Stat>
            <Value>1,432</Value>
            <Name>Following</Name>
          </Stat>
        </StatsContainer>
      </Avatar>
    </Container>
  );
};

const Container = styled.div`
  grid-area: profile;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfilePicture = styled.img`
  border-radius: 16px;
  height: 156px;
  width: 156px; ;
`;

const NameP = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin: 10px;
  color: #4e5150;
`;

const Location = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a9a9a9;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Stat = styled.div`
  background: #e5e5e5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 67px;
  margin: 24px;
  @media (max-width: 400px) {
    margin: 5px;
  }
`;

const Value = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #4e5150;
`;

const Name = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #bdbdbd;
`;

export default ProfileData;
