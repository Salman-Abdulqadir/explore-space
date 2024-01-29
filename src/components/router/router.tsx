import { Route, Routes } from "react-router";

// components
import Home from "../home";
import Recipes from "../recipes";
import RecipeDetails from "../recipeDetails";
import NotFoundPage from "../notFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipes />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
