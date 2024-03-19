// src/stores/bookmarkStore.ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

import { db } from "../db/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

interface BookmarkStore {
  bookmarks: string[];
}

interface Actions {
  addBookmark: (recipeId: string) => Promise<void>;
  removeBookmark: (recipeId: string) => Promise<void>;
  setBookmarks: (bookmarks: string[]) => void;
}

const useBookmarkStore = create<BookmarkStore & Actions>()(
  // devtoolsを導入して、Redex Devtools でステートを確認できるようにする。
  devtools(
    immer((set) => ({
      bookmarks: [],
      addBookmark: async (recipeId) => {
        set((state) => {
          state.bookmarks.push(recipeId); // immerを使用して直接配列に追加
        });
        const updatedBookmarks = useBookmarkStore.getState().bookmarks;
        const userDocRef = doc(db, `user/V6It2FrodO6srZZDmhWp`);
        await updateDoc(userDocRef, { bookmarks: updatedBookmarks });
      },
      removeBookmark: async (recipeId) => {
        set((state) => {
          const index = state.bookmarks.indexOf(recipeId);
          if (index > -1) {
            state.bookmarks.splice(index, 1); // immerを使用して直接配列から削除
          }
        });
        const updatedBookmarks = useBookmarkStore.getState().bookmarks;
        const userDocRef = doc(db, `user/V6It2FrodO6srZZDmhWp`);
        await updateDoc(userDocRef, { bookmarks: updatedBookmarks });
      },
      setBookmarks: (bookmarks) => {
        set((state) => {
          state.bookmarks = bookmarks; // immerを使用して直接状態を更新
        });
      },
    }))
  )
);

const initializeBookmarks = async () => {
  const userDocRef = doc(db, `user/V6It2FrodO6srZZDmhWp`);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    useBookmarkStore.getState().setBookmarks(docSnap.data().bookmarks || []);
  }
};

export { useBookmarkStore, initializeBookmarks };
