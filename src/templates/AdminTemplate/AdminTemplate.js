import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "../../../node_modules/antd/dist/antd.css";

import { connect } from "react-redux";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AdminComponent = (props) => {
  return (
    <Fragment>
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">Quản lý phim</Menu.Item>
                <Menu.Item key="2">Quản lý người dùng</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export const Admin = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <AdminComponent>
            <Component {...props} />
          </AdminComponent>
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {};
};

export const AdminTemplate = connect(mapStateToProps)(Admin);

// export default connect(mapStateToProps)(Admin);
