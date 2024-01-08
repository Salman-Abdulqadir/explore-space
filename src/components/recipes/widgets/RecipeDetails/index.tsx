import "./_recipe-details.scss";
import React from "react";
import { Card, Modal } from "antd";
import { Recipe } from "../../../../interface/Recipes";
import MealDetail from "./Details";
const RecipeDetails: React.FC<{
  recipe: Recipe;
  isOpen: boolean;
  setIsOpen: any;
}> = ({ recipe, isOpen, setIsOpen }) => {
  return (
    <Modal
      title={recipe.strMeal}
      centered
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      width={1000}
    >
      <MealDetail meal={recipe} />
    </Modal>
  );
};

export default RecipeDetails;
