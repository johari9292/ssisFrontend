import { Button, Checkbox, Form, Input, Card, Image, Space } from "antd";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../router/publicRoutes";
import cover from "../../assets/images/logo.png";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function handleSubmit(values) {
    auth.signin(values?.username, () => {
      navigate(from, { replace: true });
    });
  }
  return (
    <>
      <Card
        hoverable
        style={{
          maxWidth: "30vw",
          margin: "auto",
          padding: 30,
          marginBottom: 30,
        }}
      >
        <Space align="center" direction="vertical">
          <Image style={{ marginBottom: 30 }} height={"10vw"} src={cover} />
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </>
  );
};

export default Login;
