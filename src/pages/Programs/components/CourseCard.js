import React from "react";
import { Avatar, Card, Space, Typography } from "antd";
import { BASE_URL } from "../../../constant/url";

const { Meta } = Card;
const CourseCard = ({ courseId, title, description }) => (
  <Card
    style={{
      width: "100%",
      padding: 5,
      height: 250,
    }}
    hoverable
    cover={
      <img
        height={150}
        alt="example"
        src={`${BASE_URL}/courses/photo/${courseId}?${new Date().getTime()}`}
      />
    }
  >
    {/* <Meta title={title} description={description} /> */}
    {/* <div direction="vertical"> */}
    <Typography.Text style={{ fontSize: 18, fontWeight: 700 }}>
      {title}
    </Typography.Text>{" "}
    <br />
    <Typography.Text ellipsis>{description}</Typography.Text>
    {/* </div> */}
  </Card>
);
export default CourseCard;
