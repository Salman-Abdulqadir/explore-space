import { Layout } from "antd";
import React from "react";
import NavBar from "./NavBar";

const { Header, Content } = Layout;
const AppLayout: React.FC<any> = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          margin: 0,
          padding: 0,
          minHeight: "12vh",
          background: "white",
        }}
      >
        <NavBar />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
