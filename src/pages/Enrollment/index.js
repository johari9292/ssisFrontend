import React, { useEffect, useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { Card, Col, Divider, Row } from "antd";
import cover from "../../assets/images/cover.jpg";
import { PRIMARY_COLOR } from "../../constant/color";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import CourseCard from "./components/CourseCard";
import HttpService from "../../utils/axiosService";
import Loader from "../../components/Loader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEnrollCourses } from "../../redux/slices/enrolledCourses";

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
const UserDashboard = () => {
  const [enrolled, setEnrolled] = useState([]);
  const dispatch = useDispatch();
  const axiosService = new HttpService();
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();
  const getEnrolled = async (signal) => {
    try {
      setIsLoading(true);
      const res = await axiosService.post("/enrollment/new/" + id);
      const { data } = await axiosService.get("/enrollment/enrolled");
      setEnrolled(data);
      dispatch(setEnrollCourses(data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getEnrolled(signal);
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Card style={{ margin: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StyledHeader>Courses you enrolled </StyledHeader>
        </div>

        <Row gutter={30}>
          {enrolled?.map((enroll) => (
            <Col
              style={{ marginBottom: 20 }}
              key={enroll?._id}
              xs={6}
              sm={12}
              md={8}
              lg={8}
            >
              <StyledLink to={"/enrolled-course/" + enroll?._id}>
                <CourseCard
                  courseId={enroll?.course?._id}
                  description={enroll?.course?.description}
                  title={enroll?.course?.name}
                  complete={
                    enroll?.lessonStatus.filter(
                      (data) => data?.complete === true
                    ).length
                  }
                  total={enroll?.lessonStatus.length}
                />
              </StyledLink>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};
const StyledLink = styled(Link)``;

export default UserDashboard;
