import Header from "./components/Header";
import ListaProyectos from "./components/ListaProyectos";
import Footer from "./components/Footer";
import "./css/styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <ListaProyectos />
      </main>
      <Footer />
    </>
  );
}

export default App;