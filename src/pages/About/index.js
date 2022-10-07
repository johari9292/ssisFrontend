import React from "react";

import { Card, Col, Image, Row } from "antd";
import cover from "../../assets/images/cover.jpg";
import { PRIMARY_COLOR } from "../../constant/color";
import styled from "styled-components";

const { Meta } = Card;

const StyledName = styled.h1`
  font-size: 24x;
  font-weight: 700;
  text-align: center;
`;
const StyledPosition = styled.h6`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
const StyledHeader = styled.h1`
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.primaryColor};
  margin: 20px;
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
const About = () => {
  return (
    <div>
      <Image width={"100%"} height={"20vw"} src={cover} />
      <Card style={{ margin: 20 }} hoverable>
        <StyledHeader primaryColor={PRIMARY_COLOR}>Our History</StyledHeader>
        <StyledText>
          Shaping your Skills.Shaping your Skills.Shaping your Skills. Shaping
          your Skills. Shaping your Skills. Shaping your Skills. Shaping your
          Skills. Shaping your Skills. Shaping your Skills. Shaping your Skills.
          Shaping your Skills.Shaping your Skills.Shaping your Skills.Shaping
          your Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills. Shaping your Skills. Shaping your Skills.
          Shaping your Skills. Shaping your Skills. Shaping your Skills Shaping
          your Skills.Shaping your Skills.Shaping your Skills. Shaping your
          Skills. Shaping your Skills. Shaping your Skills. Shaping your Skills.
          Shaping your Skills. Shaping your Skills. Shaping your Skills. Shaping
          your Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills. Shaping your Skills. Shaping your Skills.
          Shaping your Skills. Shaping your Skills. Shaping your Skills.
        </StyledText>
      </Card>
      <Card style={{ margin: 20 }} hoverable>
        <StyledHeader primaryColor={PRIMARY_COLOR}>Our Mission</StyledHeader>
        <StyledText>
          Shaping your Skills.Shaping your Skills.Shaping your Skills. Shaping
          your Skills. Shaping your Skills. Shaping your Skills. Shaping your
          Skills. Shaping your Skills. Shaping your Skills. Shaping your Skills.
          Shaping your Skills.Shaping your Skills.Shaping your Skills.Shaping
          your Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills. Shaping your Skills. Shaping your Skills.
          Shaping your Skills. Shaping your Skills. Shaping your Skills Shaping
          your Skills.Shaping your Skills.Shaping your Skills. Shaping your
          Skills. Shaping your Skills. Shaping your Skills. Shaping your Skills.
          Shaping your Skills. Shaping your Skills. Shaping your Skills. Shaping
          your Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills.Shaping your Skills.Shaping your
          Skills.Shaping your Skills. Shaping your Skills. Shaping your Skills.
          Shaping your Skills. Shaping your Skills. Shaping your Skills.
        </StyledText>
      </Card>
      <Card style={{ margin: 20 }}>
        <StyledHeader primaryColor={PRIMARY_COLOR}>Our Team</StyledHeader>
        <Row gutter={30}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
            <Col
              key={index}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
            >
              <Card
                hoverable
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5ODc5NjY5ODU0NjQzMzIy/gettyimages-3091504.jpg"
                  />
                }
              >
                <StyledName>Elbert Einstein Scientist</StyledName>
                <StyledPosition>CEO</StyledPosition>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default About;
