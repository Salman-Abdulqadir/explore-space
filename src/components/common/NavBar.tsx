import React, { useState } from "react";
import { FiMapPin, FiHome } from "react-icons/fi";

import {
  GiForkKnifeSpoon,
  GiShinyApple,
  GiPerspectiveDiceSixFacesRandom,
} from "react-icons/gi";
import type { MenuProps } from "antd";
import { Menu, Button, Flex, Typography, Avatar, Drawer } from "antd";

const exploreSubMenuConfig: MenuProps["items"] = [
  {
    label: "Categories",
    key: "categories",
    icon: <GiShinyApple />,
  },
  {
    label: "Areas",
    key: "areas",
    icon: <FiMapPin />,
  },
  {
    label: "Ingredients",
    key: "ingredients",
    icon: <GiForkKnifeSpoon />,
  },
];
const navConfig: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <FiHome />,
  },
  {
    label: "Explore",
    key: "explore",
    icon: <FiMapPin />,
    children: exploreSubMenuConfig,
    disabled: false,
  },
  {
    label: "Recommendations",
    key: "recommendations",
    icon: <FiMapPin />,
  },
  {
    label: (
      <Button
        type="primary"
        shape="round"
        icon={<GiPerspectiveDiceSixFacesRandom />}
        style={{ background: "var(--primary)", color: "var(--black)" }}
      >
        Random
      </Button>
    ),
    key: "randomPick",
  },
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <>
      <Flex justify="space-between" align="center" wrap="wrap">
        <Flex align="center" gap="1rem">
          <Avatar
            icon={<GiForkKnifeSpoon style={{ color: "var(--black)" }} />}
            size={50}
            style={{ background: "var(--primary)" }}
          />
          <Typography.Title level={2}>Food</Typography.Title>
        </Flex>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
          {navConfig.map((item: any) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Flex>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={drawerVisible}
      >
        <Menu onClick={onClick} selectedKeys={[current]} mode="vertical">
          {navConfig.map((item: any) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Drawer>

      {/* Button to trigger Drawer on smaller screens */}
      <Button type="primary" onClick={showDrawer} style={{ display: "none" }}>
        Open Menu
      </Button>
    </>
  );
};

export default NavBar;
