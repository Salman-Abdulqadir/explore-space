import { useState } from "react";
// import useApi from "../hooks/useApi";
import { RecipeService } from "../services/recipe.service";
import Recipe from "./RecipeCard";
import { Card, Input, Row, Col, Dropdown } from "antd";
import useApi from "../hooks/useApi";

const { Search } = Input;

const RecipeList = () => {
  const [recipe, setRecipe] = useState("");
  const [data, setData] = useState<any>(null);
  const searchHandler = async () => {
    const { data } = await RecipeService.getRecipeByName(recipe);
    setData(data);
  };
  const {
    isLoading,
    data: categories,
    error,
  } = useApi(RecipeService.getAllCategories);
  if (isLoading) return <h1>It is loading fam...</h1>;
  return (
    <div className="grid">
      <h1>Recipes</h1>
      <Search
        onChange={(e) => setRecipe(e.target.value)}
        onPressEnter={searchHandler}
      />
      <Dropdown.Button
        menu={{
          items: categories.meals.map((category: any, index: number) => ({
            key: index,
            label: category.strCategory,
          })),
          onClick: () => {
            console.log("hrllo");
          },
        }}
        placement="bottom"
      >
        Categories
      </Dropdown.Button>
      {data && data.meals ? (
        <Row gutter={[16, 16]}>
          {data.meals.map((meal: any, index: number) => (
            <Col key={index} xs={24} sm={12} md={6} lg={6}>
              <Recipe recipe={meal} />
            </Col>
          ))}
        </Row>
      ) : (
        <Card>No Recipe found</Card>
      )}
    </div>
  );
};

export default RecipeList;
