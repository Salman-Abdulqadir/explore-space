import React, { useEffect, useState } from "react";
import {
  Avatar,
  List,
  Skeleton,
  Pagination,
  Typography,
  Button,
  Select,
} from "antd";
import "./_recipe-list.scss";
import useApi from "../../../../hooks/useApi";
import { RecipeService } from "../../../../services/recipe.service";

const RecipeList: React.FC = () => {
  const [recipeResults, getRecipes] = useApi(
    RecipeService.getMealsByArea,
    "American"
  );
  const [areaSelectValues, getAreaSelectValues] = useApi(
    RecipeService.getListOfAreas
  );
  const [categorySelectValues, getCategorySelectValues] = useApi(
    RecipeService.getListOfCategories
  );
  const [ingredientSelectValues, getIngredientSelectValues] = useApi(
    RecipeService.getListOfIngredients
  );

  const [pageSize, setPageSize] = useState(10);
  const [recipesToDisplay, setDataToDisplay] = useState<any[]>([]);
  const getRecipeResults = () =>
    !recipeResults.isLoading ? recipeResults.data.data.meals : [];
  const loading = false;
  const handlePagination = (page: number, pageSize: number) => {
    setPageSize(pageSize);
    const startingIndex = (page - 1) * pageSize;
    setDataToDisplay(
      getRecipeResults().slice(startingIndex, startingIndex + pageSize)
    );
  };
  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    if (getRecipeResults().length) getRecipeResults().slice(0, pageSize);
  }, [recipeResults.data]);
  return (
    <section className="recipe-list-section">
      {" "}
      <div className="recipe-list-section-header">
        <Typography.Title level={2}>Recipe List</Typography.Title>
        <div className="recipe-list-section-header-filters">
          <Button onClick={() => getRecipes()}>load data</Button>
          <Select value={{ label: "American", value: "American" }} />
        </div>
      </div>
      <div className="recipe-list">
        <List
          loading={recipeResults?.isLoading}
          itemLayout="vertical"
          size="small"
          pagination={false}
          dataSource={recipesToDisplay}
          renderItem={(item: any) => (
            <List.Item
              key={item.id}
              extra={
                !loading && (
                  <img width={250} alt="logo" src={item.strMealThumb} />
                )
              }
            >
              <Skeleton loading={recipeResults.isLoading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.strMealThumb} />}
                  title={<a href={item.href}>{item.strMeal}</a>}
                  //   description={item.description}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
      <Pagination
        onChange={(page, pageSize) => handlePagination(page, pageSize)}
        // disabled={!dataToDisplay.length}
        pageSize={pageSize}
        total={recipeResults.isLoading ? 0 : getRecipeResults().length}
        showTotal={(total, range) =>
          `Showing ${range[0]} to ${range[1]} of ${total}`
        }
        showSizeChanger
        showQuickJumper
      />
    </section>
  );
};

export default RecipeList;
