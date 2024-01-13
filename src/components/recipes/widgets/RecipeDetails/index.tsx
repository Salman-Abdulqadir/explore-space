import "./_recipe-details.scss";
import React from "react";
import { Modal, Space, Tag, Button } from "antd";
import { Recipe } from "../../../../interface/Recipes";
import MealDetail from "./Details";

import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaBook,
  FaMapPin,
} from "react-icons/fa6";

import { GiBookshelf } from "react-icons/gi";

const RecipeDetails: React.FC<{
  recipe: Recipe;
  isOpen: boolean;
  setIsOpen: any;
}> = ({ recipe, isOpen, setIsOpen }) => {
  return (
    <Modal
      title={
        <Space>
          <h2>{recipe.strMeal}</h2>
          <Tag>
            <Space>
              {recipe.strArea}
              <FaMapPin />
            </Space>
          </Tag>
          <Tag>
            <Space>
              {recipe.strCategory}
              <FaBook />
            </Space>
          </Tag>
        </Space>
      }
      centered
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      footer={
        <Space>
          {recipe.strCreativeCommonsConfirmed && (
            <Tag
              color={recipe.strCreativeCommonsConfirmed ? "green" : "volcano"}
            >
              <Space>
                Creative Commons Confirmed
                {recipe.strCreativeCommonsConfirmed ? (
                  <FaRegThumbsUp />
                ) : (
                  <FaRegThumbsDown />
                )}
              </Space>
            </Tag>
          )}
          {recipe.strSource && (
            <Button type="primary" icon={<GiBookshelf />}>
              <a href={recipe.strSource} target="_blank">
                See Article
              </a>
            </Button>
          )}
        </Space>
      }
      width={1000}
    >
      <MealDetail meal={recipe as Recipe} />
    </Modal>
  );
};

export default RecipeDetails;
