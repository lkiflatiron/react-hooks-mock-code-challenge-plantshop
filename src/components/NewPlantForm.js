import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  //Post once form data collected in state and submit button clicked on form
  function handleOnSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price
      })
    })
    .then(res => res.json())
    .then(newPlant => addNewPlant(newPlant))  //add newPlant returned from POST to state
    //optional: re-initialize form variables after form submit
    setName("")
    setImage("")
    setPrice('')
  }

  //form collects user input.  for a text or textarea, save the e.target.value data to state
  //put the state variable in the value to display in the browser, since React wants to control everything about
  //the component. 
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleOnSubmit} >
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
