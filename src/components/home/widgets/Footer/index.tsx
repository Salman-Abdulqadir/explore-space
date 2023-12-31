import "./_footer-section.scss";

import { Typography, Avatar } from "antd";

import { GiForkKnifeSpoon } from "react-icons/gi";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section-about">
        <Typography.Title level={1} className="footer-section-about-title">
          <span className="primary-color">About</span> Food
        </Typography.Title>
        <Typography.Paragraph className="footer-section-about-paragraph">
          Unleash your inner chef with our curated collection of delicious and
          fuss-free dishes, making cooking a delightful journey for everyone.
        </Typography.Paragraph>
      </div>
      <div className="footer-section-links">
        <div className="footer-section-links-logo">
          <div className="flex">
            <Avatar
              icon={<GiForkKnifeSpoon style={{ color: "c1ff72" }} />}
              size={100}
              className="black-background"
            />
            <Typography.Title level={1}>Food</Typography.Title>
          </div>
          <Typography.Paragraph className="footer-section-links-logo-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            commodi, illo officia id veritatis sed minus nam rem natus. Totam
            itaque enim dolorum tempore quisquam?
          </Typography.Paragraph>
        </div>
        <div className="footer-section-links-feature">
          <Typography.Title level={3}>Features</Typography.Title>
          <ul>
            <li>Explore</li>
            <li>Recommendations</li>
            <li>Discover Ingredients</li>
          </ul>
        </div>
        <div className="footer-section-links-feature">
          <Typography.Title level={3}>Features</Typography.Title>
          <ul>
            <li>Explore</li>
            <li>Recommendations</li>
            <li>Discover Ingredients</li>
          </ul>
        </div>
        <div className="flex">
          <Avatar
            icon={<FiFacebook />}
            size={50}
            className="black-background"
          />
          <Avatar icon={<FiTwitter />} size={50} className="black-background" />
          <Avatar
            icon={<FiInstagram />}
            size={50}
            className="black-background"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
