import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ListEmployee />
      </div>
      <Footer />
    </>
  );
}

export default App;
