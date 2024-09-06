import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/header";
import Hero from "./components/hero";
import Main from "./components/main";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <div className="App">
        <header id="header">
          <AppHeader />
          <Hero />
          <Main />
          <Footer />
        </header>
      </div>
    </>
  );
};

export default App;
