import { Card, Avatar, Button, Typography } from "antd";
import React from "react";

const CardWithAvatar: React.FC<any> = ({ avatarIcon, text, bgColor }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Avatar
          icon={avatarIcon}
          size={64}
          style={{ backgroundColor: bgColor }}
        />
      }
    >
      <Card.Meta
        title={
          <Typography.Paragraph style={{ textAlign: "center" }}>
            {text}
          </Typography.Paragraph>
        }
      />
      <Button
        type="primary"
        style={{
          marginTop: "1rem",
          backgroundColor: bgColor,
          color: "var(--black)",
        }}
      >
        Explore
      </Button>
    </Card>
  );
};

export default CardWithAvatar;
