import "./App.css";
import MyCarousel from "./components/Carousel/MyCarousel";
// import MyGallery from "./components/Gallery/MyGallery";
import MyFooter from "./components/MyFooter/MyFooter";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Culture from "./components/Culture/Culture";
import UserCards from "./components/Profile/UserCards";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MyGallery /> */}
      {/* <MyCarousel />
      <About />
      <Culture />
      <MyFooter /> */}
      <UserCards />
    </div>
  );
}

export default App;
