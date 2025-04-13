import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RouteWithLayout from '../components/RouteWithLayout';
import { Home, NotFound } from '../views'; // Assuming you have a layout component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/not-found" element={<RouteWithLayout  component={NotFound} />} />
      <Route path="/home" element={<RouteWithLayout  component={Home} />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
