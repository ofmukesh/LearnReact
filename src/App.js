import React from "react";
import "./App.css";
import Test from "./pages/test";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="mt-5">
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </div>
      <footer className="fixed-bottom">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
