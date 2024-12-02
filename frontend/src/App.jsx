// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignInForm from "./auth/forms/SignInForm";
import SignUpForm from "./auth/forms/SignUpForm";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NewsAticles from "./pages/NewsAticles";
import Header from "./components/shared/Header";
import { Toaster } from "./components/ui/toaster";
import Footer from "./components/shared/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<NewsAticles />} />
      </Routes>

      <Footer />
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
