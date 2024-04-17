import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { SyncedSliders } from "./components/SyncedSliders/SyncedSliders.jsx";
import { FormNewMovie } from "./components/Forms/FormNewMovie/FormNewMovie.jsx";
import { FormNewCategory } from "./components/Forms/FormNewCategory/FormNewCategory.jsx";
import { useState, useEffect } from "react";
import { clientServices } from "./service/client-service";
/* Styles */
import { GlobalStyle } from "./GlobalStyle.js";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [categories, setCategories] = useState([]);

  // Effect to fetch movies list from the server
  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const fetchedMoviesList = await clientServices.moviesList();
        if (!fetchedMoviesList || fetchedMoviesList.length === 0) {
          throw new Error("No movies found.");
        } else {
          setMoviesList(fetchedMoviesList);
        }
        console.log(fetchedMoviesList);
      } catch (error) {
        alert("An error ocurred: " + error);
      }
    };
    fetchMoviesList();
  }, []);

  // Effect to fetch categories list from the server
  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const fetchedCategories = await clientServices.categoriesList();
        if (!fetchedCategories || fetchedCategories.length === 0) {
          throw new Error("No categories found.");
        } else {
          // Update
          setCategories(fetchedCategories);
        }
      } catch (error) {
        alert("An error ocurred: " + error);
      }
    };
    fetchCategoriesList();
  }, []); // Dependency array is empty, so it runs only once on mount

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <SyncedSliders
                  moviesList={moviesList}
                  categories={categories}
                />
              }
            />
            <Route
              path="/form-new-movie"
              element={<FormNewMovie categories={categories} />}
            />
            <Route
              path="/form-new-category"
              element={<FormNewCategory categories={categories} />}
            />
            {/* Add Page404 */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
