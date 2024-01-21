import React from "react";
import { Drawer, Space } from "antd";

const RecipeFilters: React.FC<any> = ({
  children,
  isOpen = false,
  setIsOpen,
}) => {
  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
      <Space direction="vertical" size={"large"}>
        {children}
      </Space>
    </Drawer>
  );
};

export default RecipeFilters;
