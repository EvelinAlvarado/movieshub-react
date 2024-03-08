import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { SyncedSliders } from "./components/SyncedSliders/SyncedSliders.jsx";
import { FormNewMovie } from "./components/FormNewMovie/FormNewMovie.jsx";
import "./App.css";
import { FormNewCategory } from "./components/FormNewCategory/FormNewCategory.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SyncedSliders />} />
            <Route path="/form-new-movie" element={<FormNewMovie />} />
            <Route path="/form-new-category" element={<FormNewCategory />} />
            {/* Add Page404 */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
