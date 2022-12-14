import React, { useEffect, useState } from "react";

export const Product_page = () => {
  const [products, setroducts] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setroducts(data.products));
  }, []);
  console.log(products);
  return (
    <>
      <div className="p-2">
        <div className="navbar bg-base-100 border-b-2">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Shopping Cart</a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {/* <span className="badge badge-sm indicator-item">8</span> */}
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products card */}

        <div className="p-5 grid grid-cols-3 gap-5">
          {products.slice(0, 18).map((product) => {
            return (
              <div className="card card-compact w-96 bg-base-100 shadow-xl border-2">
                <figure>
                  <img
                    src={product.thumbnail}
                    alt="Product image"
                    className="h-32"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>{product.description}</p>
                  <p> Price - {product.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
