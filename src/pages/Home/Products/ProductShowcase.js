import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Spinner from "../../../components/Spinner";
import { useProductContext } from "../../../context/ProductContext";

const ProductShowcase = () => {
  const { products, loading } = useProductContext();
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 px-10 py-20">
          {products &&
            products?.map((product) => (
              <ProductCart key={product.id} product={product}></ProductCart>
            ))}
        </div>
      </section>
    </>
  );
};

export default ProductShowcase;
