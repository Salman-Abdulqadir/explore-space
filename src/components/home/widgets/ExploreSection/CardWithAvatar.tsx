import { Card, Avatar, Button, Typography } from "antd";
import React from "react";

const CardWithAvatar: React.FC<any> = ({
  avatarIcon,
  text,
  bgColor,
  description,
  buttonIcon,
  buttonText,
}) => {
  return (
    <Card className="explore-section-card" style={{ backgroundColor: bgColor }}>
      <Avatar
        icon={avatarIcon}
        size={64}
        className="explore-section-card-avatar"
      />

      <Card.Meta
        title={<Typography.Title level={2}>{text}</Typography.Title>}
        description={<Typography.Paragraph>{description}</Typography.Paragraph>}
      />

      <Button className="green-button" type="primary" icon={buttonIcon}>
        {buttonText}
      </Button>
    </Card>
  );
};

export default CardWithAvatar;
