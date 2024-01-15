import { RecipeService } from "../../../services/recipe.service";

export const convertArrayToSelectValues = (items: string[]) => {
  return items.map((item) => ({ label: item, value: item }));
};

export const formatFilterValues = (values: any[], keyToExtract: string) => {
  return values.map((value) => value[keyToExtract]);
};

export const getInstructions = (instructions: string) => {
  return instructions.split(".").filter((str) => !!str && str.length > 2);
};

export const getIngredients = (meal: any) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (meal[ingredientKey] && meal[measureKey]) {
      ingredients.push(`${meal[ingredientKey]} - ${meal[measureKey]}`);
    }
  }
  return ingredients;
};

export const extractYoutubeVideoId = (videoUrl: string) =>
  videoUrl.split("v=")[1];

export const getIngredientImageUrl = (ingredient: string) => {
  const extractedIngredient = ingredient.split("-")[0].trim().replace(" ", "");
  return RecipeService.imageBaseUrl + extractedIngredient + ".png";
};
