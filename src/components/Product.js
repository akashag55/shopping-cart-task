import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addItem } from "../features/cart/cartSlice";
import AOS from "aos";
import "aos/dist/aos.css";
const API_URL = "https://dummyjson.com/products";

function Product() {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart);
  // initial the dispatch here
  const dispatch = useDispatch();
  AOS.init({
    duration: 1200,
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: API_URL,
    })
      .then((res) => {
        console.log("Res - ", res);
        setProducts(res.data.products);
      })
      .catch((err) => console.log("Error - ", err));
    // const cart = localStorage.getItem("cart");
    // if (cartItems.length === 0 && cart) {
    //   dispatch(updateCart(cart));
    // }
  }, []);

  const addToCartHandler = (e, product) => {
    e.preventDefault();
    dispatch(addItem(product));
  };

  return (
    <div className="p-2">
      <div className="p-5 grid grid-cols-3 gap-5">
        {products.length
          ? products.map((product, i) => {
              return (
                <div
                  data-aos="slide-up"
                  key={i}
                  className="card card-compact w-96 bg-base-100 shadow-xl border-2"
                >
                  <figure>
                    <img
                      src={product.thumbnail}
                      alt="Product"
                      className="h-32"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p>{product.description}</p>
                    <p> Price - {product.price}</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => addToCartHandler(e, product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : "Loading Products..."}
      </div>
    </div>
  );
}

export default Product;
