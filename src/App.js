import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Loader, Welcome } from "./Components/index"
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
