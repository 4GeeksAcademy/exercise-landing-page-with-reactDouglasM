import React from "react";


const Card = () =>{
    return(
<div className="card my-4 mx-1">
    <div className="container">
      <div className="row" style={{height: "15rem"}}>
          <div className="col-12 aspect-ratio-square bg-custom-gray1 d-flex align-items-center justify-content-center fs-1 text-secondary">
              500 x 325
          </div>
      </div>
    </div>
        <div className="card-body text-center p-0">
          <div className="py-5">
            <h5 className="card-title mt-2 fs-1">Card title</h5>
            <p className="card-text mx-2 fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-footer p-3">
            <a href="#" className="btn btn-primary fs-4">Find Out More!</a>
          </div>
      </div>
</div>
)};

export default Card;
