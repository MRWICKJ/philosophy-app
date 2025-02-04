import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryDetail from "./pages/CategoryDetail";
import {TopicDetail} from "./pages/TopicDetail";
import { MainNav } from "./pages/MainNav";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
        <Route path="/category/:id/:itemIndex" element={<TopicDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}