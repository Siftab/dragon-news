import React from 'react';

const Card = ({props}) => {
    const {image_url,title}=props;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   
    
  </div>
</div>
    );
};

export default Card;