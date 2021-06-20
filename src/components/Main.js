import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button className="btn">Start a post</button>
        </div>
        <div>
          <button>
            <img src="https://img.icons8.com/nolan/64/stack-of-photos.png" />
            <span>Photo</span>
          </button>
          <button>
            <img src="https://img.icons8.com/wired/64/26e07f/video.png" />
            <span>Video</span>
          </button>
          <button>
            <img src="https://img.icons8.com/color/48/000000/tear-off-calendar--v2.png" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/post.png" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const CommonCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  /* height: 100vh; */
`;
const Container = styled.div`
  flex: 0.4;
  div {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-around;

    padding: 8px 16px 0px 16px;
    img {
      width: 48px;
      border-radius: 50%;
      margin-right: 8px;
    }
    span {
      color: #70b5f9;
    }

    .btn {
      justify-content: start;
      flex-grow: 1;
      border-radius: 35px;
      padding-left: 16px;
      text-align: left;
      /* margin: 4px 0; */
      border: 1px solid rgba(0, 0, 0, 0.15);
      background-color: white;
    }
  }
  button {
    /* flex-grow: 1; */
    display: flex;
    line-height: 1.5;
    align-items: center;
    outline: none;
    font-size: 14px;
    outline: none;
    min-height: 48px;
    background: transparent;
    color: rgba(0, 0, 0, 0.6);
    border: none;
    font-weight: 600;
  }
  button > img {
    display: flex;
    align-items: center;
    width: 18px;
    height: 18px;
  }

  /* border: 1px red solid; */
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
`;
export default Main;
