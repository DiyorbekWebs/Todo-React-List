import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import Services from "../components/Main/Services";
const MainLayout = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Services/>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </>
  );
};

export default MainLayout;
