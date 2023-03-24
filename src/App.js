// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default App;
