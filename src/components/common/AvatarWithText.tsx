import { Avatar, Typography } from "antd";
import React from "react";

const AvatarWithText: React.FC<any> = ({
  avatarIcon,
  backgroundColor,
  avatarSize,
  text,
}) => {
  return (
    <div className="flex">
      <Avatar
        icon={avatarIcon}
        size={avatarSize}
        style={{
          background: backgroundColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Typography.Paragraph style={{ margin: 0 }}>{text}</Typography.Paragraph>
    </div>
  );
};

export default AvatarWithText;
