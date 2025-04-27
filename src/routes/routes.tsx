import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import NoticePage from "../pages/Noticepage"
import FAQPage from "../pages/FAQpage"
import ContactPage from "../pages/Contactpage"
import PrivacyPolicy from "../pages/privacy-policy";
import ServicePolicy from "../pages/service-policy";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notice" element={<NoticePage />}/>
        <Route path="/faq" element={<FAQPage />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/service-policy" element={<ServicePolicy />} />
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
