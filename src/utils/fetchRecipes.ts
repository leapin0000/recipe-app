import axios from "axios";

import type { Hit, Recipe, RecipeResponse } from "../types/EdamamApi";

// import { translateToJapanese } from "./translate";

async function fetchRecipes(ingredient: string | undefined): Promise<Recipe[]> {
  const API_ID = import.meta.env.VITE_EDAMAM_API_ID;
  const API_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${API_ID}&app_key=${API_KEY}`;

  const { data } = await axios.get<RecipeResponse>(url);

  console.log(data);

  if (!data) {
    throw new Error("No data");
  }

  // 英語のままのレシピオブジェクトを返す
  return data.hits.map((hit) => hit.recipe);

  // 各レシピの材料を日本語に翻訳
  // const recipesWithJAIngredients = await Promise.all(
  //   data.hits.map(async (hit) => {
  //     const recipe = hit.recipe;

  //     // 各成分行を日本語に翻訳
  //     const translatedIngredientLines = await Promise.all(
  //       recipe.ingredientLines.map((line) => translateToJapanese(line))
  //     );

  //     // 翻訳された成分行でレシピオブジェクトを更新
  //     return {
  //       ...recipe,
  //       ingredientLines: translatedIngredientLines,
  //     };
  //   })
  // );

  // return recipesWithJAIngredients;
}

// レシピIDを使って、Edamam APIからレシピ情報を取得する関数
async function fetchRecipeByIds(ids: string[]): Promise<Recipe[]> {
  const API_ID = import.meta.env.VITE_EDAMAM_API_ID;
  const API_KEY = import.meta.env.VITE_EDAMAM_API_KEY;

  // idsに含まれるレシピIDを一つずづリクエストして、レシピ情報を取得し、配列に格納
  const recipes = await Promise.all(
    ids.map(async (id) => {
      const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${API_ID}&app_key=${API_KEY}`;
      const { data } = await axios.get<Hit>(url);

      if (!data) {
        throw new Error("No data");
      }

      // console.log(data);
      return data.recipe;
    })
  );

  if (!recipes) {
    throw new Error("No data");
  }

  return recipes;
}

export { fetchRecipes, fetchRecipeByIds };
