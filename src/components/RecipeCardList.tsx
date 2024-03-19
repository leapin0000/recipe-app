import type { Recipe } from "../types/EdamamApi";

import { RecipeCard } from "./RecipeCard.tsx";

export function RecipeCardList({ recipes }: { recipes: Recipe[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </ul>
  );
}
