import { Http } from "./http.service";

export class RecipeService {
  private static baseUrl = "https://www.themealdb.com/api/json/v1/1/";

  static async getRecipeByName(recipeName: string) {
    return Http.get(`${RecipeService.baseUrl}search.php?s=${recipeName}`);
  }

  static async getRecipeById(recipeId: string) {
    return Http.get(`${RecipeService.baseUrl}lookup.php?i=${recipeId}`);
  }

  static async getRandomRecipe() {
    return Http.get(`${RecipeService.baseUrl}random.php`);
  }

  static async getAllCategories() {
    return Http.get(`${RecipeService.baseUrl}categories.php`);
  }

  static async getMealsByFirstLetter(letter: string) {
    return Http.get(`${RecipeService.baseUrl}search.php?f=${letter}`);
  }

  static async getRandomSelection() {
    return Http.get(`${RecipeService.baseUrl}randomselection.php`);
  }

  static async getLatestMeals() {
    return Http.get(`${RecipeService.baseUrl}latest.php`);
  }

  static async getListOfCategories() {
    return Http.get(`${RecipeService.baseUrl}list.php?c=list`);
  }

  static async getListOfAreas() {
    console.log("I am inside the function");
    return Http.get(`${RecipeService.baseUrl}list.php?a=list`);
  }

  static async getListOfIngredients() {
    return Http.get(`${RecipeService.baseUrl}list.php?i=list`);
  }

  static async getMealsByIngredient(ingredient: string) {
    return Http.get(`${RecipeService.baseUrl}filter.php?i=${ingredient}`);
  }

  static async getMealsByMultiIngredient(ingredients: string[]) {
    const ingredientString = ingredients.join(",");
    return Http.get(`${RecipeService.baseUrl}filter.php?i=${ingredientString}`);
  }

  static async getMealsByCategory(category: string) {
    return Http.get(`${RecipeService.baseUrl}filter.php?c=${category}`);
  }

  static async getMealsByArea(area: string) {
    return Http.get(`${RecipeService.baseUrl}filter.php?a=${area}`);
  }
}
