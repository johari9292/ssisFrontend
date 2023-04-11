import React, { useEffect, useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { Card, Col, Divider, Row } from "antd";
import cover from "../../assets/images/cover.jpg";
import { PRIMARY_COLOR } from "../../constant/color";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CourseCard from "./components/CourseCard";
import HttpService from "../../utils/axiosService";
import Loader from "../../components/Loader";

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
const axiosService = new HttpService();
const Programs = () => {
  const [isElecOpen, setIsElectOpen] = useState(true);
  const [isMechOpen, setIsMechOpen] = useState(true);
  const [isCompOpen, setIsCompOpen] = useState(true);
  const [courses, setCourses] = useState([]);
  const [elecCourses, setElecCourses] = useState([]);
  const [compCourses, setCompCourses] = useState([]);
  const [mechaCourses, setMechaCourses] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getCourses = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosService.get("/courses");
      setCourses(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <img width={"100%"} height={"300px"} src={cover} />
      <Card style={{ margin: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StyledHeader>Health and Fitness </StyledHeader>
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
          <Row gutter={30}>
            {courses
              ?.filter((data) => data?.category === "hfit")
              .map((course) => (
                <Col
                  style={{ marginBottom: 20 }}
                  key={course?._id}
                  xs={6}
                  sm={12}
                  md={8}
                  lg={8}
                >
                  <StyledLink to={"/programs-and-courses/" + course?._id}>
                    <CourseCard
                      courseId={course?._id}
                      description={course?.description}
                      title={course?.name}
                    />
                  </StyledLink>
                </Col>
              ))}
          </Row>
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
          <StyledHeader>Medicine </StyledHeader>
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
          <Row gutter={30}>
            {courses
              ?.filter((data) => data?.category === "medc")
              .map((course) => (
                <Col key={course?._id} xs={6} sm={12} md={8} lg={8}>
                  <StyledLink to={"/programs-and-courses/" + course?._id}>
                    <CourseCard
                      courseId={course?._id}
                      description={course?.description}
                      title={course?.name}
                    />
                  </StyledLink>
                </Col>
              ))}
          </Row>
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
          <StyledHeader>Surgery </StyledHeader>
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
          <Row gutter={30}>
            {courses
              ?.filter((data) => data?.category === "sur")
              .map((course) => (
                <Col key={course?._id} xs={6} sm={12} md={8} lg={8}>
                  <StyledLink to={"/programs-and-courses/" + course?._id}>
                    <CourseCard
                      courseId={course?._id}
                      description={course?.description}
                      title={course?.name}
                    />
                  </StyledLink>
                </Col>
              ))}
          </Row>
        )}
      </Card>
    </div>
  );
};
const StyledLink = styled(Link)``;

export default Programs;
