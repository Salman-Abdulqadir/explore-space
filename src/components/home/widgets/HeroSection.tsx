import { Row, Col, Typography, Button, Flex } from "antd";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
// images
import heroSectionImage from "../../../assets/hero-section.gif";
const HeroSection = () => {
  return (
    <Row
      style={{
        minHeight: "85vh",
        background: "white",
        alignItems: "center",
        padding: "4rem",
      }}
    >
      <Col xs={24} sm={24} md={12} lg={12} xl={12} className="flex">
        <div>
          <Typography.Title level={1}>
            <span style={{ color: "var(--primary)" }}>Cooking</span> with Fun
            Made Easy and Accessible
          </Typography.Title>
          <Typography.Paragraph>
            Unleash your inner chef with our curated collection of delicious and
            fuss-free dishes, making cooking a delightful journey for everyone.
          </Typography.Paragraph>
        </div>
        <Flex gap={"2rem"}>
          <Button
            type="primary"
            shape="round"
            icon={<GiPerspectiveDiceSixFacesRandom />}
            style={{ background: "var(--primary)", color: "var(--black)" }}
          >
            Random
          </Button>
          <Button type="text">{"Learn More >"}</Button>
        </Flex>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <img
          src={heroSectionImage} // Replace with your image URL
          alt="Hero Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Col>
    </Row>
  );
};

export default HeroSection;
