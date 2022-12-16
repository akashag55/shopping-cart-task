import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "../features/cart/cartSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  // useEffect(() => {
  //   const cart = localStorage.getItem("cart");
  //   if (cartItems.length === 0 && cart) {
  //     dispatch(updateCart(cart));
  //   }
  // }, []);
  let totalAmount = 0;
  cartItems.map((item) => {
    let amount = item.price * item.quantity;
    totalAmount = totalAmount + amount;
  });
  console.log("item", totalAmount);
  const increaseQuantity = (e, product) => {
    e.preventDefault();
    dispatch(addItem(product));
  };
  const decreaseQuantity = (e, product) => {
    e.preventDefault();
    dispatch(removeItem(product));
  };
  const deleteItemHandler = (e, product) => {
    e.preventDefault();
    dispatch(deleteItem(product));
  };

  return (
    <div className="flex">
      <div className="w-3/4 p-6">
        {cartItems.length
          ? cartItems.map((item, i) => {
              const { thumbnail, title, price, quantity } = item;
              return (
                <>
                  <div className="">
                    <div
                      key={i}
                      className="card card-side bg-base-100 relative shadow-xl m-4 "
                    >
                      <button
                        className="btn btn-circle absolute top-8 right-8 p-4"
                        onClick={(e) => deleteItemHandler(e, item)}
                      >
                        <MdOutlineDeleteForever />
                      </button>
                      <figure>
                        <img src={thumbnail} alt="Movie" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="flex justify-start">{price}</p>
                        <div className="card-actions flex items-center justify-between w-max">
                          <button
                            className="btn btn-primary btn-square"
                            onClick={(e) => decreaseQuantity(e, item)}
                          >
                            <AiOutlineMinus />
                          </button>
                          <span className="text-bold">{quantity}</span>
                          <button
                            className="btn btn-primary btn-square"
                            onClick={(e) => increaseQuantity(e, item)}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="w-1/4 p-4">
                      <h3>Total Cart Value</h3>
                      <div class="table w-full ...">
                        <div class="table-header-group ...">
                          <div class="table-row text-center">
                            <div class="table-cell text-left ...">Quantity</div>
                            <div class="table-cell text-left ...">AMount</div>
                          </div>
                        </div>
                        {cartItems.map((item) => {
                          return (
                            <div class="table-row-group">
                              <div class="table-row text-center">
                                <div class="table-cell  ...">
                                  {item.quantity}
                                </div>
                                <div class="table-cell ...">{item.price}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div> */}
                  </div>
                </>
              );
            })
          : "No Items"}
      </div>
      <div className="w-1/4 p-4">
        <h3>Total Cart Value</h3>
        <div class="table w-full ...">
          <div class="table-header-group ...">
            <div class="table-row text-center">
              <div class="table-cell ...">Quantity</div>
              <div class="table-cell ...">AMount</div>
            </div>
          </div>
          {cartItems.map((item) => {
            return (
              <div class="table-row-group border-b-4">
                <div class="table-row text-center">
                  <div class="table-cell  ...">{item.quantity}</div>
                  <div class="table-cell ...">{item.price}</div>
                </div>
              </div>
            );
          })}
          <br />
          <div class="table-row-group first-letter:">
            <div class="table-row text-center">
              <div class="table-cell  ...">Total Value</div>
              <div class="table-cell ...">{totalAmount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
