import React, {useState} from "react";

function PlantCard({plant}) {
//display data for one plant

  const [isInStock, setIsInStock] = useState(true)

  //change true to false
  function handleClick() {
    setIsInStock(false)
  }

  //this actually isn't toggled - if you click once, the plant is out of
  //stock and stays that way
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
