import React from "react";
import Proptypes from 'prop-types';


const Card = ({ title, image, content, buttonName }) => {
  return (
    <div className="card my-3 " style={{width: "20 rem"}}>
    <img src={image} className="card-img-top" alt="..."/>
    <div className="card-body text-center">
      <h5 className="card-title fs-1">{title}</h5>
      <p className="card-text fs-5">{content}</p>
      <a href="#" className="btn btn-secondary fs-3">{buttonName}</a>
    </div>
  </div>
  )
};

export default Card;

Card.prototype = {
  image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
  buttonName: Proptypes.string,
}