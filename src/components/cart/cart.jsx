import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setCategories } from "../redux/dispatcher";
import "./cart.css";
const Cart = () => {
  const items = useSelector((state) => state.counter.items);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    cartproductdisplay(Object.keys(items));
  }, []);
  const cartproductdisplay = async (data) => {
    try {
      let productData = [];
      data.map(async (items) => {
        const res = await fetch(`https://fakestoreapi.com/products/${items}`);
        const jsonres = await res.json();
        productData.push(jsonres);
        setProduct([...productData]);
        setLoading(false);
      });
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  return (
    <>
      <h2 className="shoppingCart"> Shopping Cart</h2>
      {product.map((item) => {
        return (
          <div className="cartProduct">
            <div className="cartProductDes">
              <div
                className="itemimage"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
            <div>
              <h3 className="titleCart">{item.title}</h3>
              <p>Price</p>
              <p>{`$${item.price} X ${items[item.id]} = $${item.price *
                items[item.id]}`}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
