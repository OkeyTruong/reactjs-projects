import React from 'react';
const Tour = ({tour,removeTour}) => {
  const {id, image,info,name,price} = tour;
  return (
    <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{info}</p>
      <button className="delete-btn" onClick={()=>removeTour(id)}>
        Delete
      </button>
    </footer>
  </article>
  )
};

export default Tour;