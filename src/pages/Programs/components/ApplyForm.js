import React, { useState } from "react";
import { PRIMARY_COLOR } from "../../../constant/color";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Radio, Select, Drawer } from "antd";

const { TextArea } = Input;

const FormDrawer = ({ open, onClose, formType }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    onClose();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    onClose();
  };

  return (
    <>
      <Drawer
        title={formType + " Form"}
        style={{ color: PRIMARY_COLOR }}
        placement={"right"}
        width={500}
        onClose={onClose}
        open={open}
      >
        <Form
          // labelCol={{
          //   span: 4,
          // }}
          //   wrapperCol={{
          //     span: 14,
          //   }}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your FullName!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item label="Gender">
            <Radio.Group>
              <Radio value="apple"> Male </Radio>
              <Radio value="pear"> Female </Radio>
            </Radio.Group>
          </Form.Item> */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
                required: true,
                type: "email",
                message: "Valid email is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone_number"
            label="Phone Number"
            rules={[
              {
                required: true,
                pattern: "^[0-9]*$",
                // type: "number",
                min: 10,
                max: 10,
                message: "Valid Phone No. is required",
              },
            ]}
          >
            <Input addonBefore="+92" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,

                message: "Education is required",
              },
            ]}
            label="Educations"
          >
            <Select>
              <Select.Option value="bsc">BSc</Select.Option>
              <Select.Option value="ba">BA</Select.Option>
              <Select.Option value="msc">MSC</Select.Option>
              <Select.Option value="be">BE</Select.Option>
              <Select.Option value="fsc">FSc</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="institute"
            label="Institute/Affiliation"
            rules={[
              {
                required: true,

                message: "Institution name is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,

                message: "Field is required",
              },
            ]}
            label="Field"
          >
            <Select>
              <Select.Option value="bsc">Computer Engineering</Select.Option>
              <Select.Option value="ba">Electrical Engineering</Select.Option>
              <Select.Option value="msc">Civil Engineering</Select.Option>
              <Select.Option value="be">Mechatronics Engineering</Select.Option>
              <Select.Option value="fsc">Mechanical Engineering</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button style={{ minWidth: 150 }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default FormDrawer;
