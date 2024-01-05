import React from "react";
import Header from "./Products/Header";
import ProductShowcase from "./Products/ProductShowcase";
import OrderList from "./Products/OrderList";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-row">
        <div className="basis-4/5">
          {" "}
          <ProductShowcase />{" "}
        </div>
        <OrderList />
      </main>
    </div>
  );
};

export default Home;
