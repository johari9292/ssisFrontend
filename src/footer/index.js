import React from "react";
import { Row, Col, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  /* text-transform: uppercase; */
  display: block;
  /* height: 40px; */
  /* line-height: 40px; */
  cursor: pointer;
  /* padding: 0 15px; */
`;
const StyledMail = styled.a`
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  /* text-transform: uppercase; */
  display: block;
  /* height: 40px; */
  /* line-height: 40px; */
  cursor: pointer;
  /* padding: 0 15px; */
`;
const StyledText = styled(Typography.Text)`
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  /* text-transform: uppercase; */
  display: block;
  /* height: 40px; */
  /* line-height: 40px; */

  /* padding: 0 15px; */
`;

const Footer = () => {
  return (
    <>
      <Row gutter={30}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 10 }}
          lg={{ span: 10 }}
        >
          <Space size={"small"} direction="vertical">
            <h1 style={{ color: "white" }}>Contact Us</h1>

            <StyledMail href="mailto:johari@example.com">
              serat@info.com
            </StyledMail>

            <StyledMail href="tel:+4733378901">+920000000000</StyledMail>
            <StyledText>Office#23, Street#45, modal Town, Lahore</StyledText>
          </Space>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
        >
          <Space size={"small"} direction="vertical">
            <h1 style={{ color: "white" }}>Media Links</h1>
            <StyledLink>Islami Markaz</StyledLink>
            <StyledLink>FaceBook</StyledLink>
            <StyledLink>Twiter</StyledLink>
          </Space>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            Careers
          </h1>
        </Col>
      </Row>
      <h6
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 16,
          marginTop: 20,
        }}
      >
        © 2022 SISD. All Rights Reserved Media
      </h6>
    </>
  );
};

export default Footer;
