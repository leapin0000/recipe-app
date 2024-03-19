// BookmarkButton.tsx 内での使用例
import { useBookmarkStore } from "../stores/bookmarkStore";

interface BookmarkButtonProps {
  uri: string;
}

export function BookmarkButton({ uri }: BookmarkButtonProps) {
  const recipeId = uri.split("#recipe_")[1];
  const bookmarks = useBookmarkStore((state) => state.bookmarks);
  const addBookmark = useBookmarkStore((state) => state.addBookmark);
  const removeBookmark = useBookmarkStore((state) => state.removeBookmark);
  const isBookmarked = bookmarks.includes(recipeId);

  const toggleBookmark = async () => {
    if (isBookmarked) {
      await removeBookmark(recipeId);
    } else {
      await addBookmark(recipeId);
    }
  };

  const bookmarkClasses = isBookmarked
    ? "fill-current text-rose-400" // ブックマークされている時、ピンクで塗りつぶし
    : "stroke-current text-gray-500"; // ブックマークされていない時、グレーの枠線

  return (
    <button
      onClick={toggleBookmark}
      className="bg-transparent border-none cursor-pointer"
    >
      <svg
        className={`h-6 w-6 ${bookmarkClasses}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>
  );
}
