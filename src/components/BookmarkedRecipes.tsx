import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";

import { useBookmarkStore } from "../stores/bookmarkStore";
import { RecipeCardList } from "./RecipeCardList";
import { fetchRecipeByIds } from "../utils/fetchRecipes";

export function BookmarkedRecipes() {
  const bookmarkedRecipeIds = useBookmarkStore((state) => state.bookmarks);

  // Tanstack Queryを使用してデータをフェッチ
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["bookmarkedRecipes", bookmarkedRecipeIds],
    queryFn: () => fetchRecipeByIds(bookmarkedRecipeIds),
    // ブックマークが空の場合はクエリを無効にする
    enabled: bookmarkedRecipeIds.length > 0,
  });

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>Error: {error.message || "Failed to fetch Recipes."}</div>;
  } else if (data == undefined) {
    content = <div>食材名を入力してください。</div>;
  } else if (bookmarkedRecipeIds.length === 0) {
    content = <div>ブックマークしているレシピはありません。</div>;
  } else if (data) {
    content = <RecipeCardList recipes={data} />;
  }

  return (
    <div className="relative">
      <h2 className="mb-10">Bookmarked Recipes</h2>
      <Link
        to="/"
        className="absolute left-0 top-0 mr-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
      >
        Search Recipes
      </Link>
      {content}
    </div>
  );
}
