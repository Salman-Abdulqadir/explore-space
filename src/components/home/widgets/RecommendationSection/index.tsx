import "./_recommendation-section.scss";

import { Typography } from "antd";
import RecommendationCarrousel from "./RecommendationCarrousel";
const RecommendationSection = () => {
  return (
    <section className="recommendation-section">
      <div className="recommendation-section-about">
        <Typography.Title level={1}>
          <span className="primary-color">Recommendations</span> From All Around
          the World
        </Typography.Title>
        <Typography.Paragraph className="recommendation-section-about-paragraph">
          Unleash your inner chef with our curated collection of delicious and
          fuss-free dishes, making cooking a delightful journey for everyone.
        </Typography.Paragraph>
      </div>
      <RecommendationCarrousel />
    </section>
  );
};

export default RecommendationSection;
