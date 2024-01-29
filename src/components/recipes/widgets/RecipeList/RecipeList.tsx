import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  List,
  Pagination,
  Typography,
  Select,
  Input,
  Card,
  Button,
} from "antd";
import "./_recipe-list.scss";
import useApi from "../../../../hooks/useApi";
import { RecipeService } from "../../../../services/recipe.service";
import {
  convertArrayToSelectValues,
  formatFilterValues,
} from "../../utils/helpers";
import { defaultSelectValue } from "../../utils/constants";

// icons
import { FiFilter } from "react-icons/fi";

// components
import RecipeDetails from "../RecipeDetails";
import RecipeFilters from "./RecipeFilters";

const RecipeList: React.FC = () => {
  const navigate = useNavigate();
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

  const [selectedRecipeDetails, getSelectedRecipeDetails] = useApi(
    RecipeService.getRecipeById
  );

  //states
  const [pageSize, setPageSize] = useState(10);
  const [recipesToDisplay, setRecipesToDisplay] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState("area");
  const [formValues, setFormValues] = useState<any>({
    areaFilter: { label: "American", value: "American" },
    categoryFilter: defaultSelectValue("Category"),
    ingredientFilter: defaultSelectValue("Ingredient"),
  });
  const [isRecipeDetailsOpen, setIsRecipeDetailsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
    setIsFilterOpen(false);
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

  const isLoading = (type: string) => {
    if (type === "area") return recipeResultsByAreas.isLoading;
    else if (type === "category") return recipeResultsByCategories.isLoading;
    else if (type === "ingredient") return recipeResultsByIngredients.isLoading;
  };

  // useEffects
  useEffect(() => {
    if (!isRendered.current) {
      getRecipesByAreas("Chinese");
      getAreaSelectValues();
      getIngredientSelectValues();
      getCategorySelectValues();
      isRendered.current = true;
    }
  }, []);

  useEffect(() => {
    if (getRecipeResults(activeFilter).length)
      setRecipesToDisplay(getRecipeResults(activeFilter).slice(0, pageSize));
  }, [
    recipeResultsByAreas.data,
    recipeResultsByCategories.data,
    recipeResultsByIngredients.data,
  ]);

  useEffect(() => {
    if (selectedRecipeDetails.data?.data?.meals) {
      setIsRecipeDetailsOpen(true);
    }
  }, [selectedRecipeDetails.data]);

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
          <Button icon={<FiFilter />} onClick={() => setIsFilterOpen(true)}>
            Filters
          </Button>
        </div>
      </div>
      <div className="recipe-list">
        <List
          loading={isLoading(activeFilter)}
          grid={{ gutter: 16, column: 6 }}
          itemLayout="horizontal"
          size="large"
          pagination={false}
          dataSource={recipesToDisplay}
          renderItem={(item: any) => (
            <List.Item>
              <Card
                hoverable
                onClick={() => {
                  navigate(`/recipe/${item.idMeal}`);
                  //   getSelectedRecipeDetails(item.idMeal);
                }}
                style={{ width: 180, borderRadius: 16 }}
                cover={
                  <img
                    alt={item.strMeal}
                    src={item.strMealThumb}
                    style={{ borderRadius: 16 }}
                  />
                }
              >
                <Card.Meta title={item.strMeal} />
              </Card>
            </List.Item>
          )}
        />
      </div>
      <div className="recipe-list-section-pagination">
        <Pagination
          onChange={(page, pageSize) => handlePagination(page, pageSize)}
          // disabled={!dataToDisplay.length}
          pageSize={pageSize}
          size="small"
          pageSizeOptions={[10, 20, 30]}
          total={
            isLoading(activeFilter) ? 0 : getRecipeResults(activeFilter).length
          }
          showTotal={(total, range) => (
            <Typography.Title level={5}>
              {`Showing ${range[0]} to ${range[1]} of ${total}`}
            </Typography.Title>
          )}
          showSizeChanger
          showQuickJumper
        />
      </div>
      <RecipeDetails
        isOpen={isRecipeDetailsOpen}
        setIsOpen={setIsRecipeDetailsOpen}
        recipe={
          selectedRecipeDetails.isLoading
            ? {}
            : selectedRecipeDetails.data?.data?.meals[0]
        }
      />
      <RecipeFilters isOpen={isFilterOpen} setIsOpen={setIsFilterOpen}>
        <Select
          showSearch={true}
          style={{ width: 200 }}
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
          style={{ width: 200 }}
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
          style={{ width: 200 }}
          disabled={ingredientSelectValues.isLoading}
          onChange={(_, label) => handleInputChange("ingredientFilter", label)}
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
      </RecipeFilters>
    </section>
  );
};

export default RecipeList;
