import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import Login from "./components/login";
import Register from "./components/register";
import Agents from "./components/agents";
import PropertyList from "./components/propertylist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/propertylist" element={<PropertyList />} />
    </Routes>
  );
}

export default App;