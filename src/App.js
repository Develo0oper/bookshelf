import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./ROUTES";

import SearchPage from "./components/pages/search/SearchPage";
import BookPage from "./components/pages/book/BookPage";
import NotFound from "./components/pages/notFound/NotFound";

const App = () => (
  <main>
    <Routes>
      <Route path={ROUTES.HOME} element={<SearchPage />} />
      <Route path={ROUTES.BOOK + "/:id"} element={<BookPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default App;
