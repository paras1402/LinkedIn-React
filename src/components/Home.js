import styled from "styled-components";

import React from "react";

const Home = (props) => {
  return (
    <Container>
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
        <div className="left">left</div>
        <div className="main">main</div>
        <div className="right">right</div>
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
  justify-content: space-between;
  .left {
    flex: 0.2;
    text-align: center;
    margin: 2px;

    border: 1px red solid;
  }
  .main {
    flex: 0.6;
    text-align: center;
    border: 1px red solid;
    margin: 2px;

    display: flex;
    justify-content: center;
  }
  .right {
    margin: 2px;

    flex: 0.2;
    border: 1px red solid;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
