import React, { useEffect, useState } from "react";
// import React,  from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Switch } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { layDuLieuLocal } from "../utils/localStore";
// .....

const { Header, Sider, Content } = Layout;
const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // dark
  // khi nguoi dùng hp người dùng à quản trị thi sẽ đá về trang chủ hoặc bất kì trang  nào đo mình muốn
  useEffect(() => {
    // gọi duwxx liệu local lên
    const user = layDuLieuLocal("user");
    // không có dữ liệu
    //2 là lấy lên mà mã loại không phải là quản trị
    if (user) {
      console.log(user);
      if (user.maLoaiNguoiDung !== "QuanTri") {
        window.location.href = "https://www.google.com";
      }
    } else {
      window.location.href = "https://www.google.com";
    }
  }, []);
  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <NavLink to="/admin/user">User</NavLink>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/admin/movie">Movie</NavLink>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <NavLink to="/admin/showtime">Show Time</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
