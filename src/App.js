import "./styles.css";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Skills1 from "./components/Skills1/skills1";

 function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Skills1 />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;




