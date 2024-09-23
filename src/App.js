import React from "react";
import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";


const App = () => {
  return (
    <PageContainer>
      <Header />
    <ProductList/>
    </PageContainer>
  );
};

export default App;
