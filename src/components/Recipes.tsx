import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { fetchRecipes } from "../utils/fetchRecipes";

import { SearchForm } from "./SearchForm";
import { RecipeCardList } from "./RecipeCardList";

export function Recipes() {
  const [ingredient, setIngredient] = useState<string | undefined>();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["recipes", ingredient],
    queryFn: () => fetchRecipes(ingredient),
    enabled: ingredient != undefined,
  });

  const handleSearch = (query: string | undefined) => {
    setIngredient(query);
  };

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>Error: {error.message || "Failed to fetch Recipes."}</div>;
  } else if (data == undefined) {
    content = <div>食材名を入力してください。</div>;
  } else if (data.length === 0) {
    content = (
      <div>"{ingredient}"にヒットするレシピは見つかりませんでした。</div>
    );
  } else if (data) {
    content = <RecipeCardList recipes={data} />;
  }

  return (
    <div className="relative">
      <SearchForm onSearch={handleSearch} />
      <Link
        to="/bookmarks"
        className="absolute right-0 top-0 mr-4 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-pink-800 transition duration-300"
      >
        My Recipes
      </Link>
      {content}
    </div>
  );
}
