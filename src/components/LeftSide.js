import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../features/userSlice";
const LeftSide = (props) => {
  const user = useSelector(selectUser);
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>
              Welcome,
              {user?.displayName.charAt(0).toUpperCase() +
                user?.displayName.substr(1)}
              !
            </Link>
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
          <p>My Items</p>
        </Item>
      </ArtCard>
      <ArtCard2>
        <a>
          <List>
            <li>Groups</li>
            <li>Events</li>
            <li>Follow Hastags</li>
          </List>
          <div>
            <img src="/images/plus-icon.svg" alt="" />
          </div>
        </a>
        <Discover>
          <a>Discover more</a>
        </Discover>
      </ArtCard2>
    </Container>
  );
};

const Container = styled.div`
  flex: 0.2;
  /* text-align: center; */

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
const Widget = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const Item = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  text-align: left;
  border-color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  font-weight: 600;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const ArtCard2 = styled(ArtCard)`
  display: flex;
  flex-direction: column;
  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }
`;
const List = styled.ul`
  list-style: none;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.83;
`;

const Discover = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  padding: 12px;
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.88);
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export default LeftSide;
