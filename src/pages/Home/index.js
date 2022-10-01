import React from "react";
// import Container from "../../Container";
import { Carousel, Row, Col, Typography, Space, Card } from "antd";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Carousel autoplay>
        <div>
          <h1 style={contentStyle}>Upcoming Events</h1>
        </div>
        <div>
          <h1 style={contentStyle}>Last Event</h1>
        </div>
        <div>
          <h1 style={contentStyle}>Next Month Event</h1>
        </div>
        <div>
          <h1 style={contentStyle}>Friday Event</h1>
        </div>
      </Carousel>
      <Card hoverable style={{ margin: 20, padding: 20 }}>
        <Row gutter={60}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Space align="center" direction="vertical">
              <StyledProgramName>Electrical Program</StyledProgramName>
              <StyledProgramDescription>
                You will learn these skills in this program.It will enable you
                to learn about these concepts and that software ...more
              </StyledProgramDescription>
            </Space>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Space align="center" direction="vertical">
              <StyledProgramName>Civil Program</StyledProgramName>
              <StyledProgramDescription>
                You will learn these skills in this program.It will enable you
                to learn about these concepts and that software ...more
              </StyledProgramDescription>
            </Space>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Space align="center" direction="vertical">
              <StyledProgramName>Computer Program</StyledProgramName>
              <StyledProgramDescription>
                You will learn these skills in this program.It will enable you
                to learn about these concepts and that software ...more
              </StyledProgramDescription>
            </Space>
          </Col>
        </Row>
      </Card>
    </>
  );
};
const StyledProgramName = styled(Typography.Text)`
  color: #0079c0;
  font-weight: 500;
  font-size: 24px;
`;
const StyledProgramDescription = styled.p`
  color: #0079c0;
  font-weight: 500;
  font-size: 14px;
  max-width: 280px;
  text-align: center;
`;
const contentStyle = {
  height: "220px",
  color: "#fff",
  lineHeight: "200px",
  textAlign: "center",
  background: "#364d79",
  marginLeft: 20,
  marginRight: 20,
};
export default Home;
