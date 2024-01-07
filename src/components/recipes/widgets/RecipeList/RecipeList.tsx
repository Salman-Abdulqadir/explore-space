import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  List,
  Skeleton,
  Pagination,
  Typography,
  Button,
  Select,
  Input,
} from "antd";
import "./_recipe-list.scss";
import useApi from "../../../../hooks/useApi";
import { RecipeService } from "../../../../services/recipe.service";
import {
  convertArrayToSelectValues,
  formatFilterValues,
} from "../../utils/helpers";
import { defaultSelectValue } from "../../utils/constants";

const RecipeList: React.FC = () => {
  //api calls
  const [recipeResultsByAreas, getRecipesByAreas] = useApi(
    RecipeService.getMealsByArea
  );
  const [recipeResultsByCategories, getRecipesByCategories] = useApi(
    RecipeService.getMealsByCategory
  );
  const [recipeResultsByIngredients, getRecipesByIngredients] = useApi(
    RecipeService.getMealsByIngredient
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

  //states
  const [pageSize, setPageSize] = useState(10);
  const [recipesToDisplay, setRecipesToDisplay] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState("area");
  const loading = false;
  const [formValues, setFormValues] = useState<any>({
    areaFilter: defaultSelectValue("Area"),
    categoryFilter: defaultSelectValue("Category"),
    ingredientFilter: defaultSelectValue("Ingredient"),
  });

  // refs
  const isRendered = useRef(false);

  // methods
  const handlePagination = (page: number, pageSize: number) => {
    setPageSize(pageSize);
    const startingIndex = (page - 1) * pageSize;
    setRecipesToDisplay(
      getRecipeResults(activeFilter).slice(
        startingIndex,
        startingIndex + pageSize
      )
    );
  };

  const handleInputChange = (type: string, value: any) => {
    const _tempFormValues = { ...formValues };
    if (type === "areaFilter") {
      _tempFormValues.categoryFilter = defaultSelectValue("Category");
      _tempFormValues.ingredientFilter = defaultSelectValue("Ingredient");
      _tempFormValues.areaFilter = value;
      setActiveFilter("area");
      getRecipesByAreas(value.value);
    } else if (type === "categoryFilter") {
      _tempFormValues.categoryFilter = value;
      _tempFormValues.ingredientFilter = defaultSelectValue("Ingredient");
      _tempFormValues.areaFilter = defaultSelectValue("Area");
      setActiveFilter("category");
      getRecipesByCategories(value.value);
    } else if (type === "ingredientFilter") {
      _tempFormValues.categoryFilter = defaultSelectValue("Category");
      _tempFormValues.ingredientFilter = value;
      _tempFormValues.areaFilter = defaultSelectValue("Area");
      setActiveFilter("ingredient");
      getRecipesByIngredients(value.value);
    }

    setFormValues(_tempFormValues);
  };

  const getRecipeResults = (type: string) => {
    if (type === "area")
      return !recipeResultsByAreas.isLoading
        ? recipeResultsByAreas.data.data.meals
        : [];
    else if (type === "category")
      return !recipeResultsByCategories.isLoading
        ? recipeResultsByCategories.data.data.meals
        : [];
    else if (type === "ingredient")
      return !recipeResultsByIngredients.isLoading
        ? recipeResultsByIngredients.data.data.meals
        : [];
  };

  // useEffects
  useEffect(() => {
    if (!isRendered.current) {
      getRecipesByAreas("American");
      getAreaSelectValues();
      getIngredientSelectValues();
      getCategorySelectValues();
      isRendered.current = true;
    }
  }, []);

  useEffect(() => {
    console.log("I am here");
    if (getRecipeResults(activeFilter).length)
      setRecipesToDisplay(getRecipeResults(activeFilter).slice(0, pageSize));
  }, [
    recipeResultsByAreas.data,
    recipeResultsByCategories.data,
    recipeResultsByIngredients.data,
  ]);

  useEffect(() => {
    console.log(areaSelectValues.data);
  }, [areaSelectValues.data]);

  return (
    <section className="recipe-list-section">
      {" "}
      <div className="recipe-list-section-header">
        <Typography.Title level={2}>Recipe List</Typography.Title>
        <div className="recipe-list-section-header-filters">
          <Input.Search
            placeholder="input search text"
            allowClear
            onSearch={() => console.log("hello")}
            enterButton
          />
          <Button onClick={() => getRecipesByAreas()}>load data</Button>
          <Select
            showSearch={true}
            disabled={areaSelectValues.isLoading}
            onChange={(_, label) => handleInputChange("areaFilter", label)}
            value={formValues.areaFilter}
            options={
              areaSelectValues.isLoading
                ? []
                : convertArrayToSelectValues(
                    formatFilterValues(
                      areaSelectValues.data.data.meals,
                      "strArea"
                    )
                  )
            }
          />
          <Select
            showSearch={true}
            disabled={categorySelectValues.isLoading}
            onChange={(_, label) => handleInputChange("categoryFilter", label)}
            value={formValues.categoryFilter}
            options={
              categorySelectValues.isLoading
                ? []
                : convertArrayToSelectValues(
                    formatFilterValues(
                      categorySelectValues.data.data.meals,
                      "strCategory"
                    )
                  )
            }
          />
          <Select
            showSearch={true}
            disabled={ingredientSelectValues.isLoading}
            onChange={(_, label) =>
              handleInputChange("ingredientFilter", label)
            }
            value={formValues.ingredientFilter}
            options={
              ingredientSelectValues.isLoading
                ? []
                : convertArrayToSelectValues(
                    formatFilterValues(
                      ingredientSelectValues.data.data.meals,
                      "strIngredient"
                    )
                  )
            }
          />
        </div>
      </div>
      <div className="recipe-list">
        <List
          loading={recipeResultsByAreas?.isLoading}
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
              <Skeleton loading={recipeResultsByAreas.isLoading} active avatar>
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
        total={
          recipeResultsByAreas.isLoading
            ? 0
            : getRecipeResults(activeFilter).length
        }
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
