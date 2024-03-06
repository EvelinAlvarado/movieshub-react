import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { SyncedSliders } from "./components/SyncedSliders/SyncedSliders.jsx";
import { FormNewMovie } from "./components/FormNewMovie/FormNewMovie.jsx";
import "./App.css";
import { FormNewCategory } from "./components/FormNewCategory/FormNewCategory.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <SyncedSliders /> */}
        {/* <FormNewMovie /> */}
        <FormNewCategory />
      </main>
      <Footer />
    </>
  );
}

export default App;
