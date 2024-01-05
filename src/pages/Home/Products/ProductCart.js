import React from "react";
import toast from "react-hot-toast";

const ProductCart = ({ product }) => {
  const { category, id, description, image, title, price } = product;

  const handlerAddToCart = (productValue) => {
    const existingProduct = JSON.parse(localStorage.getItem("products"));
    if (existingProduct == null) {
      const product = { ...productValue, quantity: 1 };
      const productArray = [product];
      localStorage.setItem("products", JSON.stringify(productArray));
    } else {
      let found = false;
      for (let i = 0; i < existingProduct.length; i++) {
        if (existingProduct[i].id === id) {
          found = true;
          toast("This product already added.");
        }
      }
      if (found === false) {
        const product = { ...productValue, quantity: 1 };
        const productArray = [...existingProduct, product];
        localStorage.setItem("products", JSON.stringify(productArray));
        toast.success("Successfully product added in your order list");
      }
    }

    console.log(existingProduct);
  };
  return (
    <div>
      <div class="bg-white">
        <div>
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img className="object-cover h-52" src={image} alt="product" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{title}</h3>
          <p className="text-gray-600">{description.slice(0, 50)} ..</p>
          <p class="mt-1 text-lg font-medium text-gray-900">{price} $</p>
          <button
            className="bg-emerald-800 text-white py-2 px-4 rounded-full hover:bg-emerald-600 focus:outline-none"
            onClick={() => handlerAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
