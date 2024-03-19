import { type FormEvent } from "react";

import { translateToEnglish } from "../utils/translate";
import { isEnglishText } from "../utils/isEnglishText";
interface SearchFormProps {
  onSearch: (query: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    let ingredient = formData.get("ingredient") as string;

    // フォームへの入力が英語でなければ英語に翻訳
    if (!isEnglishText(ingredient)) {
      ingredient = await translateToEnglish(ingredient);
      // strawberry (esp. the garden strawberry, Fragaria x ananassa) のようなレスポンスから、最初の単語だけを抽出
      ingredient = ingredient.split("(")[0];
    }

    onSearch(ingredient);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        name="ingredient"
        className="border rounded-l-lg p-2"
        placeholder="食材名... (卵, トマト)"
        required
        autoFocus
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
      >
        Search
      </button>
    </form>
  );
}
