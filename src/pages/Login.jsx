import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Image or Content */}
        <div className="w-1/2 hidden md:block">
          <img
            src={loginImage}
            alt="Login Side Content"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Login to Your Account
          </h2>

          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              label="Username"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              label="Password"
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="float-right text-blue-600" href="#">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full rounded-lg bg-blue-500 hover:bg-blue-600"
              >
                Log in
              </Button>
            </Form.Item>

            <div className="text-center mt-4">
              Or{" "}
              <Link to="/signup" className="text-blue-600">
                register now!
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
