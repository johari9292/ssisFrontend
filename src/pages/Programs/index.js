import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { Card, Col, Divider, Image, Row } from "antd";
import cover from "../../assets/images/cover.jpg";
import { PRIMARY_COLOR } from "../../constant/color";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Meta } = Card;

const StyledHeader = styled.h1`
  font-size: 24px;
  font-weight: 600;
  /* text-align: center; */
  /* color: ${(props) => props.primaryColor}; */
  /* margin: 20px; */
  color: black;
`;

const StyledText = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: black;
  max-width: 85vw;
  margin: auto;
  @media screen and (max-width: 830px) {
    max-width: 98vw;
  }
`;
const Programs = () => {
  const [isElecOpen, setIsElectOpen] = useState(false);
  const [isMechOpen, setIsMechOpen] = useState(false);
  const [isCompOpen, setIsCompOpen] = useState(false);

  return (
    <div>
      <Image width={"100%"} height={"20vw"} src={cover} />
      <Card style={{ margin: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StyledHeader>Electrical Engineering </StyledHeader>
          {isElecOpen ? (
            <MinusOutlined
              style={{ color: "black", fontSize: 30 }}
              onClick={() => setIsElectOpen(!isElecOpen)}
            />
          ) : (
            <PlusOutlined
              style={{ color: "black", fontSize: 30, fontWeight: "bold" }}
              onClick={() => setIsElectOpen(!isElecOpen)}
            />
          )}
        </div>
        {isElecOpen && (
          <div style={{ marginLeft: 20 }}>
            <StyledLink to="/programs-and-courses/power">
              {" "}
              Power Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />
            <StyledLink to="/programs-and-courses/telecommunication">
              Telecommunication Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />{" "}
            <StyledLink to="/programs-and-courses/computer">
              Computer Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />{" "}
            <StyledLink to="/programs-and-courses/electronics">
              Electronics Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />
          </div>
        )}
      </Card>
      <Card style={{ margin: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StyledHeader>Mechatronics Engineering </StyledHeader>
          {isMechOpen ? (
            <MinusOutlined
              style={{ color: "black", fontSize: 30 }}
              onClick={() => setIsMechOpen(!isMechOpen)}
            />
          ) : (
            <PlusOutlined
              style={{ color: "black", fontSize: 30, fontWeight: "bold" }}
              onClick={() => setIsMechOpen(!isMechOpen)}
            />
          )}
        </div>
        {isMechOpen && (
          <div style={{ marginLeft: 20 }}>
            <StyledLink to="/programs-and-courses/robotics">
              {" "}
              Robotics Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />
            <StyledLink to="/programs-and-courses/telecommunication">
              Telecommunication Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />{" "}
            <StyledLink to="/programs-and-courses">Computer Courses</StyledLink>
            <Divider style={{ margin: 2 }} />{" "}
            <StyledLink to="/programs-and-courses/electronics">
              Electronics Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />
          </div>
        )}
      </Card>
      <Card style={{ margin: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StyledHeader>Computer Science/Engineering </StyledHeader>
          {isCompOpen ? (
            <MinusOutlined
              style={{ color: "black", fontSize: 30 }}
              onClick={() => setIsCompOpen(!isCompOpen)}
            />
          ) : (
            <PlusOutlined
              style={{ color: "black", fontSize: 30, fontWeight: "bold" }}
              onClick={() => setIsCompOpen(!isCompOpen)}
            />
          )}
        </div>
        {isCompOpen && (
          <div style={{ marginLeft: 20 }}>
            <StyledLink to="/programs-and-courses/computer-eng">
              {" "}
              Computer Engineering Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />
            <StyledLink to="/programs-and-courses/cyber-security">
              Cyber Security Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />{" "}
            <StyledLink to="/programs-and-courses/networking">
              Networking Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />{" "}
            <StyledLink to="/programs-and-courses/web-developments">
              Web Developement Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />
            <StyledLink to="/programs-and-courses/graphic-designing">
              Graphic Designing Courses
            </StyledLink>
            <Divider style={{ margin: 2 }} />
          </div>
        )}
      </Card>
    </div>
  );
};
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  display: block;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  padding: 0 8px;
`;

export default Programs;
