import About from "./components/home/About";
import Banner from "./components/home/Banner";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <h1>Hello green earth!</h1>
      <Footer />
    </>
  );
}

export default App;
