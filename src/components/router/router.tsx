import { Route, Routes } from "react-router";

// components
import Home from "../home";
import Recipes from "../recipes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipes />} />
    </Routes>
  );
};

export default AppRouter;
