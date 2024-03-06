import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { SyncedSliders } from "./components/SyncedSliders/SyncedSliders.jsx";
import { FormNewMovie } from "./components/FormNewMovie/FormNewMovie.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <SyncedSliders /> */}
        <FormNewMovie />
      </main>
      <Footer />
    </>
  );
}

export default App;
