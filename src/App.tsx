import "./App.css";
import Contact from "./app/contact";
import Details from "./app/details";
import Features from "./app/features";
import Footer from "./app/footer";
import Gallery from "./app/gallery";
import Inicio from "./app/inicio";
import Navbar from "./app/navbar";
import WS from "./components/WS/WS";

function App() {
  const numberPhone = 3216446044;
  const opts = ["Inicio", "Características", "Galería", "Detalles", "Contacto"];
  const lowerOpts = opts?.map((opt) => opt?.toLowerCase());

  return (
    <main className="font-montserrat bg-[white] sm:tracking-wide">
      <Navbar opts={lowerOpts} />
      <Inicio id={lowerOpts[0]} numberPhone={numberPhone} />
      <Features id={lowerOpts[1]} />
      <Gallery id={lowerOpts[2]} />
      <Details id={lowerOpts[3]} />
      <Contact id={lowerOpts[4]} />
      <Footer />
      <WS numberPhone={numberPhone} />
    </main>
  );
}

export default App;
