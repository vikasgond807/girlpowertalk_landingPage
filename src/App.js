import "./App.css";
import MyCarousel from "./components/Carousel/MyCarousel";
import MyGallery from "./components/Gallery/MyGallery";
import MyFooter from "./components/MyFooter/MyFooter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyGallery />
      <MyCarousel />
      <MyFooter />
    </div>
  );
}

export default App;
