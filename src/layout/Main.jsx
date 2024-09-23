import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const { Content, Footer } = Layout;

const Main = () => {
  return (
    <Layout>
      <Navbar />
      {/* <Content className="px-12">
        <Breadcrumb className="my-4">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="p-6 min-h-[380px] bg-white rounded-lg shadow">
          <Outlet />
        </div>
      </Content> */}
      <div className="bg-gray-100">
        <Outlet />
      </div>

      <Footer className="text-center bg-gray-300">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Main;
