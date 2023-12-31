import { Row, Col, Typography } from "antd";
import { GiForkKnifeSpoon } from "react-icons/gi";
const { Title, Paragraph } = Typography;
import CardWithAvatar from "./CardWithAvatar";
const ExploreSection = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography.Title level={2}>
        <span style={{ color: "var(--primary)" }}>Explore</span> Easy and
        Delicious Recipes
      </Typography.Title>
      <Paragraph style={{ textAlign: "center" }}>
        Discover a variety of mouth-watering dishes crafted just for you.
      </Paragraph>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <CardWithAvatar
            avatarIcon={<GiForkKnifeSpoon style={{ color: "black" }} />}
            bgColor="var(--primary)"
            text="Discover New Flavors"
          />
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <CardWithAvatar
            avatarIcon={<GiForkKnifeSpoon style={{ color: "black" }} />}
            bgColor="var(--primary)"
            text="Cook Like a Pro"
          />
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <CardWithAvatar
            avatarIcon={<GiForkKnifeSpoon style={{ color: "black" }} />}
            bgColor="var(--primary)"
            text="Try Exciting Recipes"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ExploreSection;
