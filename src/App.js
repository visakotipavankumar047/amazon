import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Slider from "./Components/Slider/Slider";
import Testimonals from "./Components/Testimonials/Testimonals";
import Virtual from "./Components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonals />
      <Footer />
    </div>
  );
}

export default App;
