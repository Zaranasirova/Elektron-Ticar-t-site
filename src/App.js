import React from "react";
import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Loading from "./assets/scss/components/Loading";



const App = () => {
  return (
    <PageContainer>

      <Header />
      <Loading/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </PageContainer>
  );
};

export default App;
