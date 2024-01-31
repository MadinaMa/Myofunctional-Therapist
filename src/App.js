import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Contacts from "./Contacts";
import Pictures from "./Pictures";
import Courses from "./Courses";
import './App.css';
import { useTranslation } from "react-i18next";

function App() {

  const {i18n, t} = useTranslation();
  const toggleLang = () => {
     i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
   }

  return (
      <Router>
        <nav>
        <Link to="/" className="link"> { t ('Homes') }  </Link>
        <Link to="/pictures" className="link"> { t ('Photo') }  </Link>
        <Link to="/courses" className="link"> { t ('Course') }  </Link>
        <Link to="/contacts" className="link">  { t ('Contact') }  </Link>

        <button className="enRu" onClick={toggleLang}> 
              {i18n.language === 'en' ? 'RU' : 'EN'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pictures" element={<Pictures/>} />        
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contacts" element={<Contacts/>} />  
      </Routes>
    </Router>
  );
}

export default App;
