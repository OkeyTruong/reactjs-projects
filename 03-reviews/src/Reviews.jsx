import React, {  useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (index)=>{
    if(index > people.length -1 ){
      return 0;
    }if(index < 0){
      return people.length -1
    }
    return index
  }

  const nextPerson = ()=>{
    setIndex(index=>{
      return checkIndex(index+1)
    })
  }
  const prevPerson = () =>{
    setIndex(index =>{
      return checkIndex(index -1)
    })
  }

  const randomPerson = ()=>{
    let randomIndex = Math.floor(Math.random() * people.length)
    if(randomIndex === index) randomIndex = index + randomIndex
    setIndex(checkIndex(randomIndex))
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" 
          onClick={prevPerson}
        >
          <FaChevronLeft />
        </button>
        <button className="next-btn" 
          onClick={nextPerson}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" 
        onClick={randomPerson}
      >
        surprise me
      </button>
    </article>
  );
};

export default Reviews;
