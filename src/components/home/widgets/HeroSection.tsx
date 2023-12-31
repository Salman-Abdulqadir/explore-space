import { Row, Col, Typography, Button, Flex } from "antd";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FiHeart, FiStar } from "react-icons/fi";
// images
import heroSectionImage from "../../../assets/hero-section.gif";
import AvatarWithText from "../../common/AvatarWithText";

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
      <Col xs={24} sm={24} md={12} lg={12} xl={12} className="flex-col">
        <div>
          <Typography.Title level={2} style={{ fontSize: "3.5rem" }}>
            <span className="primary-color">Cooking</span> with Fun Made Easy
            and Accessible
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
            className="green-button"
          >
            Random
          </Button>
          <Button type="text">{"Learn More >"}</Button>
        </Flex>
        <Flex gap={"2rem"}>
          <AvatarWithText
            avatarIcon={<FiHeart style={{ color: "rgb(255, 145, 77)" }} />}
            backgroundColor={"rgba(255, 145, 77, 0.2)"}
            avatarSize={60}
            text="Inspired by hundereds of delicious recipes"
            flex={1}
          />
          <AvatarWithText
            avatarIcon={<FiStar style={{ color: "rgb(126, 217, 87)" }} />}
            backgroundColor={"rgba(126, 217, 87, 0.2)"}
            avatarSize={60}
            text="Inspired by hundereds of delicious recipes"
          />
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
