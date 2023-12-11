import React from "react";

import { Avatar, Card, Tag } from "antd";

const { Meta } = Card;

const Recipe: React.FC<any> = ({ recipe }) => {
  return (
    <Card
      style={{ width: 500, margin: "2rem auto" }}
      cover={<img alt="example" src={recipe.strMealThumb} />}
      actions={[]}
    >
      <Meta
        title={recipe.strMeal}
        description={recipe.strInstructions.slice(0, 100)}
      />
      <div style={{ margin: "1rem 0rem" }}>
        <Tag>{recipe.strCategory}</Tag>
        <Tag>{recipe.strArea}</Tag>
      </div>
    </Card>
  );
};

export default Recipe;
