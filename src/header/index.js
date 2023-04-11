import { Space, Button, Image, Menu, Dropdown } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import logo from "../assets/images/logo.png";
import { logout } from "../redux/slices/userSlice";

import { useNavigate } from "react-router-dom";
// import "./header.css";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  let auth = useSelector((state) => state?.user?.status);
  const dispatch = useDispatch();
  console.log("authhhhhhhhhhhhhh", auth);
  const { navigate } = useNavigate;
  return (
    <StyledContainer>
      <Link to="/">
        <StyledLogoContainer>
          <img style={{ marginTop: -21 }} width={100} src={logo} />
          <StyledLogoText>Sirat Institute of Skills Development</StyledLogoText>
        </StyledLogoContainer>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 15,
          }}
        >
          {auth ? (
            <Button
              onClick={() => {
                // auth.signout(() => navigate("/"));
                dispatch(logout());
                window.localStorage.clear();
              }}
              type="primary"
            >
              Sign Out{" "}
            </Button>
          ) : (
            <Link to={"/login"}>
              {" "}
              <Button type="primary">Course Login </Button>
            </Link>
          )}
          <StyledIconBar onClick={() => setVisible(true)}>
            <MenuOutlined style={{ fontSize: 25, marginTop: -15 }} />
          </StyledIconBar>
        </div>

        <StyledNavBar>
          <StyledUl style={visible ? { left: 0 } : {}}>
            <StyledClose className="close">
              <StyledClosedSpan onClick={() => setVisible(false)}>
                ×
              </StyledClosedSpan>
            </StyledClose>
            <li>
              {" "}
              <StyledLink
                active={index === 0}
                onClick={() => {
                  setVisible(false);
                  setIndex(0);
                }}
                to="/"
              >
                Home
              </StyledLink>
            </li>
            <li>
              {" "}
              <StyledLink
                active={index === 1}
                onClick={() => {
                  setVisible(false);
                  setIndex(1);
                }}
                to="/about"
              >
                About
              </StyledLink>
            </li>

            <Dropdown
              overlay={
                <Menu
                  items={[
                    {
                      key: "1",
                      label: (
                        <StyledLink
                          active={index === 2}
                          onClick={() => {
                            setVisible(false);
                            setIndex(2);
                          }}
                          to="/programs-and-courses/engineering"
                        >
                          Engineering Courses
                        </StyledLink>
                      ),
                    },
                    {
                      key: "2",
                      label: (
                        <StyledLink
                          active={index === 2}
                          onClick={() => {
                            setVisible(false);
                            setIndex(2);
                          }}
                          to="/programs-and-courses/medical"
                        >
                          Medical Courses
                        </StyledLink>
                      ),
                    },
                  ]}
                />
              }
            >
              <StyledLink
                active={index === 2}
                onClick={(e) => e.preventDefault()}
              >
                Program &amp; Courses
              </StyledLink>
            </Dropdown>
            <li>
              <StyledLink
                active={index === 3}
                onClick={() => {
                  setVisible(false);
                  setIndex(3);
                }}
                to="/apply-and-enroll"
              >
                Apply &amp; Enroll
              </StyledLink>
            </li>
            <li>
              <StyledLink
                active={index === 4}
                onClick={() => {
                  setVisible(false);
                  setIndex(4);
                }}
                to="/alumni"
              >
                Alumni
              </StyledLink>
            </li>
            <li>
              <StyledLink
                active={index === 5}
                onClick={() => {
                  setVisible(false);
                  setIndex(5);
                }}
                to="/about"
              >
                Blogs
              </StyledLink>
            </li>
            <li>
              <StyledLink
                active={index === 6}
                onClick={() => {
                  setVisible(false);
                  setIndex(6);
                }}
                to="/about"
              >
                Events
              </StyledLink>
            </li>
          </StyledUl>
        </StyledNavBar>
      </div>
    </StyledContainer>
  );
};

const StyledLogoText = styled.h2`
  color: #0079c0;
  align-self: center;

  @media only screen and (max-width: 830px) {
    /* font-size: 8px; */
    display: none;
  }
`;
const StyledLogoContainer = styled.div`
  display: flex;

  flex-direction: row;
`;
const StyledIconBar = styled.div`
  padding: 18px 8px;
  width: 50px;
  height: 60px;
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
  @media only screen and (max-width: 830px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
`;

const StyledClosedSpan = styled.span`
  font-size: 40px;
  display: inline-block;
  border: 1px solid #cccccc;
  padding: 0 10px;
  cursor: pointer;
`;
const StyledClose = styled.li`
  display: none;
  text-align: right;
  padding: 10px;
  @media only screen and (max-width: 830px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(prop) => (prop?.active ? "#0079c0" : "black")};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  padding: 0 8px;
  @media only screen and (max-width: 830px) {
    padding: 10px;
    font-size: 16px;
    height: auto;
    line-height: normal;
    color: #555555;
  }
`;
const StyledUl = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 830px) {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    position: fixed;
    left: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: #ffffff;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-transition: left 0.3s;
    -o-transition: left 0.3s;
    transition: left 0.3s;
  }
`;
const StyledNavBar = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0;
  justify-items: flex-end;
  justify-content: flex-end;
  @media only screen and (max-width: 830px) {
    -webkit-box-flex: 0;
    -ms-flex: 0;
    flex: 0;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  width: 100%;

  margin: 20px;
`;
export default Header;
