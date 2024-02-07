import Descuento from "./components/descuento";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <header className="mt-6">
        <Descuento></Descuento>
        <NavBar></NavBar>
      </header>
      <main></main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
