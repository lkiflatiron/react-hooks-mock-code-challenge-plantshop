import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  //This is a main component.  It gets plant data from the data store
  //and calls the PlantList with the data.  It also conditionally renders a 
  //Plant Search component based on a button click
  
  const [plants, setPlants] = useState([])
  const [isSearch, setIsSearch] = useState(true)

 function addNewPlant(newPlant) {
    setPlants([...plants, newPlant])
 } 

 function handleClick() {
   setIsSearch(isSearch=> (!isSearch))
 }

  useEffect(()=>{
    fetch(`https://plantsytest-app.herokuapp.com/plants`)
    .then(res => res.json())
    .then(plants=> setPlants(plants))
  }, [])

  return (
    <main>
      <button name="remove" onClick={handleClick}>Remove Search Section</button>
      <NewPlantForm addNewPlant={addNewPlant}/>
      {isSearch ? <Search /> : null}
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
