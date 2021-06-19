import React from "react";
import styled from "styled-components";
const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>

        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="images/item-icon.svg" alt="" />
          </span>
        </Item>
      </ArtCard>
    </Container>
  );
};

const Container = styled.div`
  flex: 0.2;
  /* text-align: center; */
  margin: 2px;

  /* border: 1px red solid; */
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: box-shadow 3ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg"); //
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 30px;
  background-color: white;
  border-radius: 50%;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 700;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;
const Widget = styled.div``;
const Item = styled.div``;

export default LeftSide;
