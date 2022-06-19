import React, { useEffect, useState } from "react";
import Card from "./card/cards";
import CardLayout from "./cardLayout/cardLayout";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductDashboard = () => {
  let navigate = useNavigate();
  let { category } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [selectedcategory, setSelectedcategory] = useState(false);

  useEffect(() => {
    getselectedcategoryproduct();
  }, []);

  const getselectedcategoryproduct = async () => {
    try {
      let product = {};
      setLoading(true);
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const jsonres = await res.json();
      product = {
        name: category,
        data: jsonres,
      };
      setLoading(false);
      setSelectedcategory(product);
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
        <section className="categoryData">
          <h1>{selectedcategory.name}</h1>
          <CardLayout type="multiRow">
            {selectedcategory.data.map((item, index) => {
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
                  onClick={() => navigate(`/product/${item.id}`)}
                />
              );
            })}
          </CardLayout>
        </section>
      </>
    );
};
export default ProductDashboard;
