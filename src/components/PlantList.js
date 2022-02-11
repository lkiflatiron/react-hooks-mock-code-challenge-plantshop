import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  //receive array of plant objects, map out array of <PlantCard components
  return (
    <ul className="cards">{plants.map(plant => 
      <PlantCard key={plant.id} 
      plant={plant} />)}
      </ul>
  );
}

export default PlantList;
