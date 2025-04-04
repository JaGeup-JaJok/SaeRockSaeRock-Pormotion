import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import NoticePage from "../pages/Noticepage"
import FAQPage from "../pages/FAQpage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notice" element={<NoticePage />}/>
        <Route path="/faq" element={<FAQPage />}/>
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
