import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { Space, Row, Typography, Card, Tooltip, Spin } from "antd";
import "./_recipe-details.scss";
import useApi from "../../hooks/useApi";
import { RecipeService } from "../../services/recipe.service";
import AppLayout from "../common/AppLayout";

import { extractYoutubeVideoId, getIngredients } from "../common/utils/helpers";
import YouTube from "react-youtube";

const RecipeDetails = () => {
  const [recipeDetails, getRecipeDetails] = useApi(RecipeService.getRecipeById);
  const isDetailsFetched = useRef(false);
  const location = useLocation();
  useEffect(() => {
    if (!isDetailsFetched.current) {
      getRecipeDetails(location.pathname.split("/")[2]);
      isDetailsFetched.current = true;
    }
  }, []);
  const recipe = recipeDetails?.data?.meal;
  return (
    <AppLayout>
      {recipeDetails?.data?.meal ? (
        <Spin size="large">
          <div className="loading"></div>
        </Spin>
      ) : (
        <h1>working</h1>
        // <div className="meal-details">
        //   {recipe?.strYoutube && (
        //     <YouTube
        //       videoId={extractYoutubeVideoId(recipe.strYoutube)}
        //       opts={{
        //         width: "950",
        //         height: "450",
        //       }}
        //       className="meal-details-youtube"
        //     />
        //   )}
        //   <Row>
        //     <Space align="start" size={16}>
        //       <img
        //         src={recipe.strMealThumb}
        //         alt={recipe.strMeal}
        //         className="meal-details-image"
        //       />
        //       <Space direction="vertical">
        //         <Typography.Title level={4}>Instructions</Typography.Title>
        //         <Typography.Paragraph>
        //           {recipe.strInstructions}
        //         </Typography.Paragraph>
        //       </Space>
        //     </Space>
        //   </Row>
        //   <Row>
        //     <Space direction="vertical">
        //       <Typography.Title level={3}>Ingredients</Typography.Title>
        //       <Card style={{ border: 0 }}>
        //         {getIngredients(recipe).map((ingredient, index) => (
        //           <Card.Grid
        //             key={index}
        //             className="meal-details-ingredient-card"
        //             hoverable
        //             // onClick={(event) => handleIngredientClick(event)}
        //           >
        //             {ingredient}
        //           </Card.Grid>
        //         ))}
        //       </Card>
        //     </Space>
        //   </Row>
        // </div>
      )}
    </AppLayout>
  );
};

export default RecipeDetails;
