import React from "react";
import { Card, Typography, Row, Col, Button } from "antd";

const { Meta } = Card;

const MealDetail: React.FC<{ meal: any }> = ({ meal }) => {
  const renderIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (meal[ingredientKey] && meal[measureKey]) {
        ingredients.push(
          <li key={ingredientKey}>
            {meal[ingredientKey]} - {meal[measureKey]}
          </li>
        );
      }
    }

    return ingredients;
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Meta title={meal.strMeal} description={meal.strInstructions} />
      </Col>
      <Col span={24}>
        <Typography.Title level={3}>Ingredients</Typography.Title>
        <ul>{renderIngredients()}</ul>
      </Col>
      <Col span={24}>
        <Button type="primary" href={meal.strYoutube} target="_blank">
          Watch Video
        </Button>
      </Col>
    </Row>
  );
};

export default MealDetail;
