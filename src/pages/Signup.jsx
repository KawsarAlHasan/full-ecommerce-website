import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import signupImage from "../assets/signup.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Image or Content */}
        <div className="w-1/2 hidden md:block">
          <img
            src={signupImage}
            alt="Signup Side Content"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Side: Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Create a New Account
          </h2>

          <Form
            name="signup"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            {/* Username Field */}
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

            {/* Email Field */}
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input a valid email!",
                  type: "email",
                },
              ]}
              label="Email"
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                className="rounded-lg"
              />
            </Form.Item>

            {/* Password Field */}
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

            {/* Confirm Password Field */}
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
              label="Confirm Password"
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm Password"
                className="rounded-lg"
              />
            </Form.Item>

            {/* Signup Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full rounded-lg bg-blue-500 hover:bg-blue-600"
              >
                Sign Up
              </Button>
            </Form.Item>

            <div className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Log in here!
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
