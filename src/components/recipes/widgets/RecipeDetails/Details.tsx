import React, { useEffect, useState } from "react";
import "./_recipe-details.scss";

import { Card, Typography, Row, Space } from "antd";
import YouTube from "react-youtube";
import { extractYoutubeVideoId, getIngredients } from "../../utils/helpers";

const MealDetail: React.FC<{ meal: any }> = ({ meal }) => {
  const [isInstructionExpanded, setIsInstructionExpanded] = useState(true);
  // const [ingredientPicture, getIngredientPicture] = useApi(RecipeService.get);
  useEffect(() => {
    setIsInstructionExpanded(false);
  }, []);

  // const handleIngredientClick = (e) => {};
  return (
    <div className="meal-details">
      {meal.strYoutube && (
        <YouTube
          videoId={extractYoutubeVideoId(meal.strYoutube)}
          opts={{
            width: "950",
            height: "450",
          }}
          className="meal-details-youtube"
        />
      )}
      <Row>
        <Space align="start" size={16}>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="meal-details-image"
          />
          <Space direction="vertical">
            <Typography.Title level={4}>Instructions</Typography.Title>
            <Typography.Paragraph
              ellipsis={
                isInstructionExpanded
                  ? {
                      rows: 11,
                      expandable: true,
                      onExpand: () => {
                        setIsInstructionExpanded(true);
                      },
                      onEllipsis: () => setIsInstructionExpanded(true),
                    }
                  : false
              }
            >
              {meal.strInstructions}
            </Typography.Paragraph>
          </Space>
        </Space>
      </Row>
      <Row>
        <Space direction="vertical">
          <Typography.Title level={3}>Ingredients</Typography.Title>
          <Card style={{ border: 0 }}>
            {getIngredients(meal).map((ingredient, index) => (
              <Card.Grid
                key={index}
                className="meal-details-ingredient-card"
                hoverable
                // onClick={(event) => handleIngredientClick(event)}
              >
                {ingredient}
              </Card.Grid>
            ))}
          </Card>
        </Space>
      </Row>
    </div>
  );
};

export default MealDetail;
