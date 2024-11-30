// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignInForm from "./auth/forms/SignInForm";
import SignUpForm from "./auth/forms/SignUpForm";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NewsAticles from "./pages/NewsAticles";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<NewsAticles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
