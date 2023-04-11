import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [urlIndex, setUrlIndex] = useState(0);
  const { id } = useParams();
  console.log("id", id);
  const enrolledCourses = useSelector((state) =>
    state?.enrolledCourses?.enrolledCourses.filter((data) => data?._id === id)
  );
  console.log("enrolled Courses", enrolledCourses);
  const items = enrolledCourses[0]?.course?.lessons.map((data, index) => {
    return getItem(data?.title, index);
  });
  const urlId = enrolledCourses[0]?.course?.lessons.map((data, index) => {
    return data?.resource_url;
  });

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: "white" }}
        // onCollapse={(value) => setCollapsed(value)}
      >
        {collapsed ? (
          <MenuUnfoldOutlined
            className="trigger"
            style={{ marginLeft: 10, fontSize: 30, backgroundColor: "white" }}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <MenuFoldOutlined
            className="trigger"
            style={{ marginLeft: 10, fontSize: 30, backgroundColor: "white" }}
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
        <Menu
          theme="light"
          defaultSelectedKeys={["0"]}
          onClick={(e) => setUrlIndex(e?.key)}
          mode="inline"
          items={items}
          style={{ minHeight: "100vh" }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ backgroundColor: "white" }}>Course OverView</Header>
        <Content
          style={{
            // padding: "0 16px",
            backgroundColor: "white",
          }}
        >
          <div
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
              //   webkitallowfullscreen
              //   mozallowfullscreen
              allowFullScreen
              src={"//ljsp.lwcdn.com/api/video/embed.jsp?id=" + urlId[urlIndex]}
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
                height: "70%",
              }}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
