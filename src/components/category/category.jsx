import React, { useState } from "react";
import { useSelector } from "react-redux";

const Category = () => {
  const categories = useSelector((state) => state.counter.categories);
  const [selectedcategory, setSelectedcategory] = useState(false);

  return (
    <>
      <section className="category">
        <h3
          onClick={() => setSelectedcategory(false)}
          style={
            selectedcategory ? {} : { color: "black", backgroundColor: "white" }
          }
        >
          All
        </h3>
        {categoryData.map((item, index) => (
          <h3
            onClick={() => navigate(`/category/${item.name}`)}
            style={
              item.name === selectedcategory.name
                ? { color: "black", backgroundColor: "white" }
                : {}
            }
            key={index}
          >
            {item.name}
          </h3>
        ))}
      </section>
    </>
  );
};
export default Category;
