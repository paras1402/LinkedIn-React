import styled from "styled-components";

import React from "react";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
const Home = (props) => {
  const user = useSelector(selectUser);
  return (
    <Container>
      {!user && <Redirect to="/"></Redirect>}
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find Talented props in record time with Upwork and keep buisness
          moving.
        </p>
      </Section>

      <Layout>
        <LeftSide className="left"></LeftSide>
        <Main className="main"></Main>
        <RightSide className="right"></RightSide>
      </Layout>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
