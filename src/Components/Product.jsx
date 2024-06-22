import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";


const Product = ({ ele }) => {
  const {dispatch} = useContext(CartContext)
  return (
    <div className="col">
      <div className="card h-100">
        <img src={ele.thumbnail} className="card-img-top h-65" />
        <div className="card-body">
          <h4 className="card-title">{ele.title}</h4>
          <h5 className="card-title">${ele.price}</h5>
          <button className="btn btn-danger" onClick={()=>dispatch({type:"Add" , ele:ele})}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
