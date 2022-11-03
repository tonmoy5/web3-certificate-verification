import { Link, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/' >Hello</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
