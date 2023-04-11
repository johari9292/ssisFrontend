import React, { useState } from "react";

import { Card, Col, Row, Space, Layout, Button, Typography } from "antd";
import cover from "../../assets/images/cover.jpg";
import { PRIMARY_COLOR } from "../../constant/color";
import styled from "styled-components";
import Internship from "./components/Internship";
import Trainings from "./components/Trainings";
import Workshops from "./components/Workshops";
import Webinars from "./components/Webinars";
import { Link } from "react-router-dom";
const { Content } = Layout;

const Apply = () => {
  const [selected, setSelected] = useState("internships");
  const renderComponent = (selected) => {
    switch (selected) {
      case "webinars":
        return <Webinars />;
      case "trainings":
        return <Trainings />;
      case "workshops":
        return <Workshops />;
      default:
        return <Internship />;
    }
  };
  return (
    <div>
      <img width={"100%"} height={"300px"} src={cover} />

      <Row style={{ margin: 20 }} gutter={30}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
        >
          <Card
            style={{
              minHeight: "100%",
            }}
            hoverable
          >
            <Space direction="vertical" align="center">
              <Typography.Title style={{ marginLeft: 20 }}>
                Categories
              </Typography.Title>
              <StyledButton
                type="primary"
                onClick={() => setSelected("internships")}
              >
                Internships
              </StyledButton>
              <StyledButton
                type="primary"
                onClick={() => setSelected("trainings")}
              >
                Trainings
              </StyledButton>
              <StyledButton
                type="primary"
                onClick={() => setSelected("workshops")}
              >
                Workshops
              </StyledButton>
              <StyledButton
                type="primary"
                onClick={() => setSelected("webinars")}
              >
                {" "}
                Webinars
              </StyledButton>
            </Space>
          </Card>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 18 }}
          lg={{ span: 18 }}
        >
          <Card hoverable style={{ minHeight: "60vh" }}>
            {renderComponent(selected)}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const StyledButton = styled(Button)`
  min-width: 200px;
  margin: 10px 0px 10px 25px;
`;

export default Apply;
