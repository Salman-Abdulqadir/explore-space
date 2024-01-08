import React from "react";
import AppLayout from "../common/AppLayout";

// components
import RecipeList from "./widgets/RecipeList/RecipeList";
const Recipe: React.FC = () => {
  return (
    <AppLayout>
      <RecipeList />
    </AppLayout>
  );
};

export default Recipe;
