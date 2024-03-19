import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { initializeBookmarks } from "./stores/bookmarkStore";

import { Recipes } from "./components/Recipes";
import { BookmarkedRecipes } from "./components/BookmarkedRecipes";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    initializeBookmarks();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/bookmarks" element={<BookmarkedRecipes />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
