import type { Recipe } from "../types/EdamamApi.d.ts";
import { BookmarkButton } from "./BookmarkButton";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const {
    label,
    image,
    cuisineType,
    calories,
    ingredientLines,
    totalNutrients,
    url,
    uri,
    yield: serving,
  } = recipe;

  const protein = (totalNutrients.PROCNT.quantity / serving).toFixed(1);
  const fat = (totalNutrients.FAT.quantity / serving).toFixed(1);
  const carbs = (totalNutrients.CHOCDF.quantity / serving).toFixed(1);
  const salt = (totalNutrients.NA.quantity / serving / 1000).toFixed(2);

  return (
    <li className="border rounded-lg shadow-lg p-4 relative">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold mb-2">{label}</h2>
        <BookmarkButton uri={uri} />
      </div>
      <p className="text-sm text-gray-600 capitalize">{cuisineType}</p>
      <img src={image} alt={label} className="w-full h-auto mt-2 mb-2" />
      <p className="text-sm">
        エネルギー: {Math.round(calories / serving)} kcal
      </p>
      <p className="text-lg mt-2 text-left">
        <strong>栄養成分（1人分）</strong>
      </p>
      <ul className="list-none pl-5 text-left">
        <li>たんぱく質: {protein ? `${protein} g` : "N/A"}</li>
        <li>脂質: {fat ? `${fat} g` : "N/A"}</li>
        <li>炭水化物: {carbs ? `${carbs} g` : "N/A"}</li>
        <li>食塩相当分: {salt ? `${salt} g` : "N/A"}</li>
      </ul>
      <p className="text-lg mt-5 text-left">
        <strong>材料（{serving}人分）</strong>
      </p>
      <ul className="list-disc pl-5 mb-2 text-left">
        {ingredientLines.map((ingredient, i) => (
          <li key={i} className="text-sm">
            {ingredient}
          </li>
        ))}
      </ul>
      <a
        href={url}
        className="absolute inset-x-0 bottom-0 bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded text-center transition duration-300 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Recipe
      </a>
    </li>
  );
}
