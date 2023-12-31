import React, { useState } from "react";
import { FiMapPin, FiHome } from "react-icons/fi";

import {
  GiForkKnifeSpoon,
  GiShinyApple,
  GiPerspectiveDiceSixFacesRandom,
} from "react-icons/gi";
import type { MenuProps } from "antd";
import { Menu, Button, Flex, Typography, Avatar } from "antd";

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
        className="green-button"
      >
        Random
      </Button>
    ),
    key: "randomPick",
  },
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      wrap="wrap"
      className="nav-bar"
    >
      <Flex align="center" gap={"1rem"}>
        <Avatar
          icon={<GiForkKnifeSpoon style={{ color: "black" }} />}
          size={50}
          className="primary-background"
        />
        <Typography.Title level={2}>Food</Typography.Title>
      </Flex>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={navConfig}
      />
    </Flex>
  );
};

export default NavBar;
