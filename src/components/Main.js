import React, { useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const handler = () => {
    setShowModal(!showModal);
  };
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button className="btn" onClick={handler}>
            Start a post
          </button>
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
      <Article>
        <SharedActor>
          <a>
            <img src="/images/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <img src="/images/ellipses.png" alt="" />
          </button>
        </SharedActor>
        <Description>Description</Description>
        <SharedImage>
          <a>
            <img src="/images/tree.jpg" alt="" />
          </a>
        </SharedImage>

        <SocialCounts>
          <li>
            <button>
              <img src="/images/like.png" alt="" />
              <img src="/images/clap.png" alt="" />
              <span>75</span>
            </button>
          </li>
          <li>
            <a>2 Comments</a>
          </li>
        </SocialCounts>
        <SocialActions>
          <button>
            <img src="/images/like.png" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/comment.png" alt="" />
            <span>Comment</span>
          </button>
          <button>
            <img src="/images/share.png" alt="" />
            <span>Share</span>
          </button>
          <button>
            <img src="/images/send.png" alt="" />
            <span>Send</span>
          </button>
        </SocialActions>
      </Article>

      {showModal && <PostModal onClose={handler}></PostModal>}
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

  /* border: 1px red solid; */
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

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
`;

const Article = styled(CommonCard)`
  margin: 0 0 8px;
  overflow: visible;
  padding: 0;
`;

const SharedActor = styled.div`
  /* padding-right: 40px; */
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          /* font-weight: 400; */
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    width: 32px;
    height: 32px;
    background-position: center;
    background: transparent;

    outline: none;
    border: none;
    img {
      height: 100%;
      width: 100%;
    }
  }
  /* background-color: pink; */
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
`;

const SocialCounts = styled.ul`
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin: 0 16px;
  font-size: 12px;
  overflow: auto;
  border-bottom: 1px solid #e9e5df;
  li {
    display: flex;
    align-items: center;
    list-style: none;

    button {
      background: transparent;
      outline: none;
      border: none;
      display: flex;
      align-items: center;
    }
    img {
      margin-right: 2px;
      height: 20px;
      background: white;
      border: none;
      outline: none;
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    background: transparent;
    border: none;

    img {
      height: 20px;
    }
    span {
      margin-left: 8px;
    }
  }
`;
export default Main;
