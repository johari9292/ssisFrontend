import React, { useState } from "react";
import { Button, Col, Divider, Row, Space, Tag, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import FormDrawer from "./Form";

const Webinars = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  return (
    <>
      {open && (
        <FormDrawer
          open={open}
          onClose={() => setOpen(false)}
          formType={type}
        />
      )}
      <div>
        <Typography.Title>Webinars</Typography.Title>
        <Space size={"large"} direction="vertical">
          {[
            "Software Development Webinar",
            "Networking and Cyber Security Webinar",
            " Web Applications Development using React , Redux ,Next JS and Hooks Webinar  ",
            "Mobile Application Webinar",
          ].map((item) => (
            // <Space key={item} size={"large"} align="baseline">
            <>
              <Row gutter={30} style={{ width: "100%" }}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 18 }}
                  lg={{ span: 18 }}
                >
                  {" "}
                  <h2 style={{ marginTop: 10 }}> {item}</h2>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 6 }}
                  lg={{ span: 6 }}
                >
                  {" "}
                  <Button
                    onClick={() => {
                      setOpen(true);
                      setType(item);
                    }}
                    style={{ marginTop: 13, minWidth: 120 }}
                    type="primary"
                  >
                    Apply
                  </Button>
                </Col>
              </Row>
              <Divider style={{ margin: 0 }} />
            </>
            // </Space>
          ))}
        </Space>
      </div>
    </>
  );
};

export default Webinars;
