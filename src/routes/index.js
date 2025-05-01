import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RouteWithLayout from '../components/RouteWithLayout';
import { Home, NotFound,WhyAttend,About,PrivacyPolicy,TermsandCondition } from '../views'; // Assuming you have a layout component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/not-found" element={<RouteWithLayout  component={NotFound} />} />
      <Route path="/home" element={<RouteWithLayout  component={Home} />} />
      <Route path="/about-us" element={<RouteWithLayout  component={About} />} />
      <Route path="/why-attend" element={<RouteWithLayout  component={WhyAttend} />} />

      
      <Route path="/privacy-policy" element={<RouteWithLayout  component={PrivacyPolicy} />} />
      <Route path="/terms-and-condition" element={<RouteWithLayout  component={TermsandCondition} />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
