import React from "react";
import "./App.css";
import Test from "./pages/test";
import Nav from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-test container-fluid">
        <Test />
      </header>
      <footer className="fixed-bottom">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
