import { Button, Checkbox, Form, Input, Card, Space } from "antd";
import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import cover from "../../assets/images/logo.png";
import { login } from "../../redux/slices/userSlice";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();

  let from = location.state?.from?.pathname || "/";
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSubmit = async (values) => {
    console.log("vlaueeee", values);
    try {
      const { data } = await axios.post(
        "https://sisdbackend.onrender.com/login",
        {
          email: values?.username,
          password: values?.password,
        }
      );
      console.log("dataaa", data);
      dispatch(login(data));
      window.localStorage.setItem("token", data?.token);
      navigate(from, { replace: true });
    } catch (error) {
      console.log("error", error);
    }
    // auth.signin(values?.username, () => {
    //   navigate(from, { replace: true });
    // });
  };
  const register = async () => {
    try {
      await axios.post("http://localhost:5000/register", {
        name: "Ishaq Ali",
        email: "johari9292@gmail.com",
        password: "ishaq@SISD.com",
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#F0F2F5",
        marginTop: -20,
        marginBottom: -20,
        padding: 20,
      }}
    >
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
          <img style={{ marginBottom: 30 }} height={"150px"} src={cover} />
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
    </div>
  );
};

export default Login;
