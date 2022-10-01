import React from "react";
import styled from "styled-components";
import { Empty, BackTop } from "antd";
import { UpSquareFilled } from "@ant-design/icons";

const primaryColor = "blue";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 60vh;
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

const Container = ({
  children,
  pageHeader = null,
  isLoading,
  isEmpty = false,
  emptyScreenMessage,
}) => {
  if (isLoading) {
    return (
      <LoadingWrapper>
        <h1>Logo here</h1>
      </LoadingWrapper>
    );
  } else {
    return (
      <>
        <Wrapper>
          {pageHeader}
          <div
            style={{
              //backgroundColor: "rgb(20, 52, 23)",
              width: "100%",
              height: "100%",
              display: "flex",
              padding: "15px",
            }}
          >
            {isEmpty ? (
              <EmptyWrapper>
                <Empty description={emptyScreenMessage} />
              </EmptyWrapper>
            ) : (
              children
            )}
          </div>
        </Wrapper>
        <BackTop style={{ right: 20, bottom: 20 }}>
          <UpSquareFilled style={{ fontSize: "40px", color: primaryColor }} />
        </BackTop>
      </>
    );
  }
};

export default Container;
