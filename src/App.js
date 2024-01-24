// App.js
import logo from './components/logo.jpg'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/SchoolSupplies";
import Contact from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gradient-to-r from-green-500 to-black p-4 drop-shadow-md">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <ul className="flex justify-center space-x-9 text-white">
              <li>
                <Link to="/" className="hover:text-green-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/SchoolSupplies" className="hover:text-green-500">
                  School Supplies
                  <br /> اللوازم المدرسية
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" className="hover:text-green-500">
                  Contact Us
                  <br />
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SchoolSupplies" element={<About />} />
          <Route path="/ContactUs" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
