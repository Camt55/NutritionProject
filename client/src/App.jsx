import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import Image from "./doctor.png"



function App(props) {
  const [userinputFood, setuserinputFood] = useState("")
  // foodEaten: {apple : {Calories: ..., Carbohydrates: ..., }}
  const [foodEaten, setfoodEaten] = useState({})
  const [recommendedNutrition, setrecommendedNutrition] = useState({Calories: 0, Carbohydrates: 0, Fiber : 0, Protein: 0, Fat: 0, Water: 0})
  

  function handleUserInputFood(event) {
    setuserinputFood(event.target.value)
  }

  function handleUserInputFormSubmit(event) {
    // Need to add access database stuff here
    // REMOVE LATER
    event.preventDefault()
    foodEaten[userinputFood] = "TEST"
    setfoodEaten({...foodEaten})
  }
  return (
    <div className="App">
      <header>
        <h1 className="header"> GoNutrition </h1>
        {/* Need Login Stuff */}
      </header>
      <div className="bodyOne">
        <div className="improveHeadline">
          <h1 id="improveNutrition">Improve your Nutrition</h1>
          <h2 id="improveDes">Using the foods you've eaten, we calculate what nutrients you lack or have in excess</h2>
        </div>
        <div className="doctorImage">
            <img src={Image} alt="DoctorImage"/>
        </div>
        <div className="inputFood" >
          <form onSubmit={handleUserInputFormSubmit}>
            <label className="label">
              Add Foods You Ate Today: 
              <br/>
              <input type="text" className= "inputFoodForm" value={userinputFood} onChange={handleUserInputFood} />
            </label>
          </form>
        </div>
      </div>
    </div>
  );

  
}

export default App;
