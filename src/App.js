import React from "react";
import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./components/ProductDetails";
import Loading from "./components/Loading";

const App = () => {
  return (
    <PageContainer>

      <Header />
      <Loading/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </PageContainer>
  );
};

export default App;
