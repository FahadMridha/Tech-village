import React, { useEffect, useState } from "react";

const OrderList = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(existingProducts);
    calculateTotalPrice(existingProducts);
  }, []);

  const calculateTotalPrice = (products) => {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      const quantity = isNaN(products[i].quantity) ? 1 : products[i].quantity;
      const price = isNaN(products[i].price) ? 0 : products[i].price;
      sum += quantity * price;
    }
    setTotalPrice(sum);
  };

  const handleQuantityDecrease = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? {
            ...product,
            quantity: isNaN(product.quantity) ? 1 : product.quantity - 1,
          }
        : product
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };

  const handleQuantityIncrease = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: isNaN(product.quantity) ? 1 : product.quantity + 1,
          }
        : product
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmed) {
      const updatedProducts = products.filter((product) => product.id !== id);

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
      calculateTotalPrice(updatedProducts);
    }
  };

  return (
    <section className="order-list bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 mt-20">
          Your Order
        </h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id} className="mb-2 text-gray-800">
                {product.category}{" "}
                {isNaN(product.quantity) ? 0 : product.quantity}
                <button
                  className="ml-2 text-red-500"
                  onClick={() => handleDelete(product.id)}
                >
                  🗑️
                </button>
                <button
                  className="ml-2 bg-green-600 rounded-full px-2 py-1 text-green-950 font-bold"
                  onClick={() => handleQuantityIncrease(product.id)}
                >
                  +
                </button>
                <button
                  className="ml-2 text-orange-500 bg-orange-200 rounded-full font-bold px-2 py-1"
                  onClick={() => handleQuantityDecrease(product.id)}
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your order is empty.</p>
        )}

        <p className="mt-4 font-bold">Total Price: ${totalPrice.toFixed(2)}</p>

        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          Checkout
        </button>
      </div>
    </section>
  );
};

export default OrderList;
