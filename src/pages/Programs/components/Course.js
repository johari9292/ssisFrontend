import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HttpService from "../../../utils/axiosService";
import { BASE_URL } from "../../../constant/url";
import cover from "../../../assets/images/cover.jpg";
import { Card, Row, Col, Typography, Button, Space, Divider } from "antd";
import { useSelector } from "react-redux";
import ApplyForm from "./ApplyForm";
import Loader from "../../../components/Loader";
const axiosService = new HttpService();
const Course = () => {
  const [course, setCourse] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let auth = useSelector((state) => state?.user?.status);
  let { id } = useParams();
  const { navigate } = useNavigate();
  const getCourse = async (signal) => {
    try {
      setIsLoading(true);
      const { data } = await axiosService.get("/courses/" + id);
      setCourse(data);
      console.log("ssssssss", data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("api calll");
    let status = true;
    if (status) {
      getCourse();
      status = false;
    }
  }, []);
  const imageUrl = `${BASE_URL}/courses/photo/${id}?${new Date().getTime()}`;

  return isLoading ? (
    <Loader />
  ) : (
    <div style={{ width: "100%" }}>
      {open && (
        <ApplyForm
          open={open}
          onClose={() => setOpen(false)}
          formType={course?.name}
        />
      )}
      <img width={"100%"} height={"300px"} src={cover} />

      <div style={{ marginTop: -290 }}>
        <Row>
          <Col lg={12}>
            {" "}
            <Card
              style={{
                backgroundColor: "#000000ba",
                border: "none",
                // opacity: 0.3,
                margin: 20,
                height: 230,
              }}
              // color="#2E1E18"
            >
              <Typography.Title style={{ color: "white" }}>
                {course?.name}
              </Typography.Title>

              {auth ? (
                <Link to={"/dashboard-courses/" + id}>
                  <Button size="large" type="primary">
                    Enroll for Course
                  </Button>
                </Link>
              ) : (
                <Space
                  size="large"
                  // align="space-between"
                  style={{ marginTop: 30 }}
                >
                  <Link to={"/dashboard-courses/" + id}>
                    <Button size="large" type="primary">
                      Login
                    </Button>
                  </Link>
                  {/* <Link to="/apply-and-enroll"> */}
                  <Typography.Text style={{ color: "white", marginTop: 20 }}>
                    OR
                  </Typography.Text>
                  <Button
                    onClick={() => setOpen(true)}
                    size="large"
                    type="primary"
                  >
                    Apply for Enrollment
                  </Button>
                  {/* </Link> */}
                </Space>
              )}
            </Card>
          </Col>
          <Col lg={12}></Col>
        </Row>
      </div>

      <div style={{ margin: 30 }}>
        <Space size="small" direction="vertical">
          <Typography.Text style={{ fontSize: 34, fontWeight: 700 }}>
            Course Details
          </Typography.Text>
          <Typography.Text style={{ fontSize: 20, fontWeight: 600 }}>
            Description:
          </Typography.Text>
          <Typography.Text style={{ fontSize: 14, fontWeight: 500 }}>
            {course?.description}
          </Typography.Text>
          <Typography.Text style={{ fontSize: 20, fontWeight: 600 }}>
            Course Lessons:
          </Typography.Text>
          {/* <div
            className="flowplayer-embed-container"
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <iframe
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen
              src="//ljsp.lwcdn.com/api/video/embed.jsp?id=8e82d60a-e8dc-4e8f-b127-6dc2e7483694&pi=d9e4f325-66fa-40af-b9eb-b5fd0773ac21"
              title={0}
              byline={0}
              portrait={0}
              frameBorder={0}
              allow="autoplay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div> */}
          {course?.lessons.map((lesson, index) => (
            <Fragment key={index}>
              {index === 0 && <Divider style={{ height: 1 }} />}
              <Typography style={{ fontSize: 16, fontWeight: 700 }} key={index}>
                {index + 1 + " " + lesson?.title}
              </Typography>
              <Divider style={{ height: 1 }} />
            </Fragment>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Course;
