import { useState } from "react";
// import useApi from "../hooks/useApi";
import { RecipeService } from "../services/recipe.service";
import Recipe from "./RecipeCard";
import { Card, Input } from "antd";

const { Search } = Input;

const RecipeList = () => {
  const [recipe, setRecipe] = useState("");
  const [data, setData] = useState<any>(null);
  const searchHandler = async () => {
    const { data } = await RecipeService.getRecipeByName(recipe);
    setData(data);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <Search
        onChange={(e) => setRecipe(e.target.value)}
        onPressEnter={searchHandler}
      />
      {data && data.meals ? (
        data?.meals.map((meal: any) => <Recipe recipe={meal} />)
      ) : (
        <Card>No Recipe found</Card>
      )}
    </div>
  );
};

export default RecipeList;
