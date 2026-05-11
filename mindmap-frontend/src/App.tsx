import { Outlet } from "react-router";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
