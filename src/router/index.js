import React from "react";
import { Layout, Affix, BackTop } from "antd";
import { UpSquareFilled } from "@ant-design/icons";
import styled from "styled-components";
import PublicRoutes from "./publicRoutes";
import { Link } from "react-router-dom";
import HeaderComp from "../header";
import FooterComp from "../footer";
import { AuthProvider } from "./publicRoutes";
const { Header, Footer, Content } = Layout;
const primaryColor = "blue";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <StyledHeaderContainer>
          <HeaderComp />
        </StyledHeaderContainer>

        <StyledContentContainer>
          <PublicRoutes />
        </StyledContentContainer>
        <Footer style={{ backgroundColor: "#0079c0" }}>
          <FooterComp />
          <BackTop style={{ right: 20, bottom: 20 }}>
            <UpSquareFilled style={{ fontSize: "40px" }} />
          </BackTop>
        </Footer>
      </Layout>
    </AuthProvider>
  );
};
const StyledHeaderContainer = styled.header`
  position: fixed;
  z-index: 15;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  margin: 0;
  padding: 0;
  height: 105px;
  background-color: white;
`;

const StyledContentContainer = styled(Content)`
  padding-top: 130px;
  background-color: white;
`;

export default AppRouter;
