import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Banner } from "./components/Banner/Banner.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner
          backgroundImageUrl="https://m.media-amazon.com/images/M/MV5BMTkyMDM1NDA5MV5BMl5BanBnXkFtZTgwMzE0ODAxMTI@._V1_.jpg"
          title="Harry Potter and the Sorcerer's Stone"
          description="An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
          releaseYear="2023"
          duration="2h 32min"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
