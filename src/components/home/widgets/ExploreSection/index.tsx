import { Typography } from "antd";
import { GiOrangeSlice, GiPineapple, GiCarrot, GiPin } from "react-icons/gi";
const { Paragraph } = Typography;
import CardWithAvatar from "./CardWithAvatar";

import "./_explore-section.scss";
const ExploreSection = () => {
  return (
    <div className="explore-section">
      <div>
        <Typography.Title level={1}>
          Explore Easy and Delicious Recipes
        </Typography.Title>
        <Paragraph style={{ textAlign: "center" }}>
          Discover a variety of mouth-watering dishes crafted just for you.
        </Paragraph>
      </div>
      <div className="explore-section-cards">
        <CardWithAvatar
          avatarIcon={<GiOrangeSlice style={{ color: "black" }} />}
          bgColor="$primary"
          text="Discover New Flavors"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda odit provident ratione optio similique?"
          buttonIcon={<GiPin />}
          buttonText="Explore by Area"
        />
        <CardWithAvatar
          avatarIcon={<GiPineapple style={{ color: "black" }} />}
          bgColor="$primary"
          text="Cook Like a Pro"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda odit provident ratione optio similique?"
          buttonIcon={<GiPin />}
          buttonText="Explore by Category"
        />

        <CardWithAvatar
          avatarIcon={<GiCarrot style={{ color: "black" }} />}
          bgColor="$primary"
          text="Try Exciting Ingredients"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda odit provident ratione optio similique?"
          buttonIcon={<GiPin />}
          buttonText="Explore by Ingredients"
        />
      </div>
    </div>
  );
};

export default ExploreSection;
