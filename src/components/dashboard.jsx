import React, { useEffect, useState } from "react";
import Card from "./card/cards";
import CardLayout from "./cardLayout/cardLayout";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [categoryData, setcategoryData] = useState([]);
  const [selectedproducts, setSelectedproducts] = useState(false);

  useEffect(() => {
    getcategory();
  }, []);
  const getcategory = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const jsonres = await res.json();
      getproduct(jsonres);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  const getproduct = (categories) => {
    try {
      let productData = [];
      categories.map(async (item, index) => {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${item}?limit=4`
        );
        const jsonres = await res.json();
        productData.push({ name: item, data: jsonres });
        setcategoryData([...productData]);
        setLoading(false);
      });
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  if (isError) {
    return <div>Error</div>;
  } else if (isLoading) {
    return <h1>Loading</h1>;
  } else
    return (
      <>
        {categoryData.map((item, index) => {
          return (
            <section className="categoryName">
              <h1 onClick={() => navigate(`/category/${item.name}`)}>
                {item.name}
              </h1>
              <CardLayout>
                {item.data.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      rating={item.rating.rate}
                      count={item.rating.count}
                      category={item.category}
                      price={item.price}
                      classname="card"
                      id={item.id}
                      onClick={() => navigate(`/product/${item.id}`)}
                    />
                  );
                })}
              </CardLayout>
            </section>
          );
        })}
      </>
    );
};

export default Dashboard;
