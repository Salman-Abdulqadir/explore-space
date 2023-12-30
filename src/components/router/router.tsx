import { Route, Routes } from "react-router";

// components
import Home from "../home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
