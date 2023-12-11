import { Http } from "./http.service";
export class RecipeService {
  private static baseUrl = "https://www.themealdb.com/api/json/v1/1/";

  static async getRecipeByName(recipeName: string) {
    return Http.get(RecipeService.baseUrl + "search.php?s=" + recipeName);
  }
}
