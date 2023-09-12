import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="../components" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
