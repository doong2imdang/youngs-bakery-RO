import React from "react";
import { Routes, Route } from "react-router-dom";
import Clock from "../pages/Clock";
import Calendar from "../pages/Calendar";
import ImageSlider from "../pages/ImageSlider";
import PaintBoard from "../pages/PaintBoard";
import Weather from "../pages/Weather";

export default function Router() {
  return (
    <Routes>
      <Route path="/clock" element={<Clock />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/paintboard" element={<PaintBoard />} />
      <Route path="/imageslider" element={<ImageSlider />} />
    </Routes>
  );
}
