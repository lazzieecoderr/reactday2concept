import React, { useState } from "react";
import Data from "../../Data.json";
import Product from "../Components/Product";

const Products = () => {
  const [data, setData] = useState(Data.products);
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {data.map((ele, index) => {
          return (
            <div key={index}>
               <Product ele={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
