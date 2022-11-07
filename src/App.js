import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Loader, Welcome } from "./Components/index"
import Add from "./pages/Admin/Add";
import Admin from "./pages/Admin/Admin";
import Edit from "./pages/Admin/Edit";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import ServiceCard from './Components/ServiceCard'

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
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <ServiceCard />
      <Footer />
    </div>
  );
}

export default App;
