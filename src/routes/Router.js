import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/about/AboutPage";
import HomePage from "../pages/home/HomePage";
import ServicesPage from "../pages/services/ServicesPage";
import PlacesPage from "../pages/places/PlacesPage";
import ContactPage from "../pages/contact/ContactPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/places" element={<PlacesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default Router;
