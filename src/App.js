import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Loader, Welcome } from "./Components/index"
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"

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
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
