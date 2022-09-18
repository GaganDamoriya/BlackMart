import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { useDispatch } from "react-redux";
import { setItems } from "./redux/dispatcher";

const Product = () => {
  const dispatch = useDispatch();
  let { productID } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
    count: "",
    rating: "",
  });

  useEffect(() => {
    getproductDetails();
  });

  const getproductDetails = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const jsonres = await res.json();
      let { id, title, description, image, price, category } = jsonres;
      setProduct({
        id,
        title,
        description,
        image,
        price,
        category,
        count: jsonres.rating.count,
        rate: jsonres.rating.rate,
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };
  let { title, description, image, price, category, rating } = product;
  if (isError) {
    return <div>Error</div>;
  } else if (isLoading) {
    return <h1>Loading ...</h1>;
  } else
    return (
      <>
        <section className="productDisplay">
          <div className="Image">
            <img className="photo" src={image} alt="display_image" />
          </div>
          <div className="content">
            <h4 className="category1">{category}</h4>
            <div>
              <h1>{title}</h1>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="price_rating">
              <h2>${price}</h2>
              <h5>{rating} </h5>
              <p>rating</p>
            </div>
            <div className="buying">
              <div>
                <button
                  className="addtocart"
                  onClick={() => dispatch(setItems(product.id))}
                >
                  Add to cart
                </button>
              </div>
              <div>
                <button className="buynow">Buy now</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Product;
