import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const LoadingWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledLogo = styled.img`
  animation: 2s opacity infinite;
  @keyframes opacity {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Loader = () => {
  return (
    <LoadingWrapper>
      <StyledLogo width={100} src={logo} />
    </LoadingWrapper>
  );
};

export default Loader;
