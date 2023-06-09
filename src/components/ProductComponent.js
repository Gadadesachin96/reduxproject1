import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product)=>{
    const{id,title,image,category,price}= product;
    return(
      <div className="four wide column" key={id}>
      <Link to={`/product/${id}`}>
    <div className="ui link cards">
     <div className="card">
        <div className="image">
          <img src ={image} alt ={title} style={{width:"15vw", height:"35vh",margin:10,padding:10 }} />
        </div>
        <div className="content">
            <div className="header">{title}</div>
            <div className="meta price"><b> ${price}</b></div>
            <div className="meta category"><b>{category}</b></div>
          </div>
        </div>
      </div>
      </Link>

    </div>
  

);
  });
  
  
  return (
    <>{renderList}</>
  );
};

export default ProductComponent;



