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

  const fetchCategoriesList = async () => {
    try {
      const fetchedCategories = await clientServices.categoriesList();
      if (!fetchedCategories || fetchedCategories.length === 0) {
        throw new Error("No categories found.");
      } else {
        setCategories(fetchedCategories);
      }
    } catch (error) {
      alert("An error ocurred: " + error);
    }
  };

  useEffect(() => {
    fetchCategoriesList();
  }, [moviesList]);

  const updateCategories = () => {
    fetchCategoriesList();
  };

  //Handle movie deleted
  const handleMovieDeleted = (deletedId) => {
    console.log("Before delete:", moviesList);
    setMoviesList(moviesList.filter((movie) => movie.id !== deletedId));
    console.log("After delete:", moviesList);
  };

  //Handle category deleted
  const handleCategoryDeleted = (deletedId) => {
    console.log("Before delete category:", categories);
    const updatedCategories = categories.filter(
      (category) => category.id !== deletedId
    );
    setCategories([...updatedCategories]);
    console.log("After delete category:", categories);
  };

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
                  onMovieDeleted={handleMovieDeleted}
                />
              }
            />
            <Route
              path="/form-new-movie"
              element={
                <FormNewMovie
                  categories={categories}
                  updateMovieList={setMoviesList}
                />
              }
            />
            <Route
              path="/form-new-category"
              element={
                <FormNewCategory
                  updateCategories={updateCategories}
                  categories={categories}
                  onCategoryDeleted={handleCategoryDeleted}
                  /* moviesList={moviesList}
                  setMoviesList={setMoviesList} */
                />
              }
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
