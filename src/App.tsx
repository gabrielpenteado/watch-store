import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./styles/global.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className=" bg-zinc-800 h-[100vh] w-[100vw]">
      <div className="flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
