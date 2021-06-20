import styled from "styled-components";
import React from "react";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar></Avatar>
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar></Avatar>
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          <span> View all recomendations</span>
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  flex: 0.2;

  margin-bottom: 3rem;
  text-align: center;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 5px;
  transition: box-shadow 3ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  height: 48px;
  background-size: contain;
  width: 48px;
  background-position: center;
  background-repeat: none;
`;
const FeedList = styled.ul`
  list-style: none;
  margin-top: 16px;
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 12px 0;
    font-size: 14px;
    position: relative;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      display: flex;
      box-sizing: border-box;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      outline: none;
      text-align: center;
    }
  }
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
const Recommendation = styled.div`
  margin-top: 1rem;

  color: #0a66c2;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default RightSide;
