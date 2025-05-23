import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import App1 from "./components/App1";
import App2 from "./components/App2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App1 />}></Route>
        <Route path="/" element={<App1 />}></Route>
        <Route path="/app2" element={<App2 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
