import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [isSearch, setIsSearch] = useState(true)

 function addNewPlant(newPlant) {
    setPlants([...plants, newPlant])
 } 

 function handleClick() {
   setIsSearch(isSearch=> (!isSearch))
 }

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
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
