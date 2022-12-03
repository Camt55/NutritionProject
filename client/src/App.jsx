import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import Image from "./doctor.png"

/* {Object.keys(recommendedNutrition).map((key, index) => <li>{recommendedNutrition[key]}</li>)}*/


function RecommendedNutrients({userSignedIn, recommendedNutrition}) {
  if (userSignedIn) {
    return (
      <div className="recommendedNutrients">
          Your Recommended Daily Nutrients
        <ul className="list-group">
          {Object.keys(recommendedNutrition).map((key, index) => (
            <li className="list-group-item"> 
              {key+":"} {recommendedNutrition[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }

}



function SignUpButton({userSignedIn}) {
  /* TODO: Need to add functionality when user clicks Sign Up Button  */
  function onUserClick(event) {
    console.log("TEST")
  }
  if (!userSignedIn) {
    return (
      <div className="signUpDiv">
          <button  onClick={onUserClick} className="signUpButton"> Sign Up</button>
      </div>
    )
  }
}


function FoodInputForm({userSignedIn, userinputFood, handleUserInputFood, handleUserInputFormSubmit}) {
  if (userSignedIn) {
    return (
      <form onSubmit={handleUserInputFormSubmit}>
            <label className="label">
              Add Foods You've Eaten Today: 
              <br/>
              <input type="text" className= "inputFoodForm" value={userinputFood} onChange={handleUserInputFood} />
            </label>
      </form>
    )
  }
}


function App(props) {
  const [userSignedIn, setuserSignedIn] = useState(true)
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
        <SignUpButton userSignedIn={userSignedIn} />
      </div>

      <div className="signedInContent">
        <div className="inputFood" >
            <FoodInputForm userSignedIn={userSignedIn} userinputFood={userinputFood} handleUserInputFood={handleUserInputFood} handleUserInputFormSubmit={handleUserInputFormSubmit}/>
        </div>
        <RecommendedNutrients userSignedIn={userSignedIn} recommendedNutrition={recommendedNutrition}/>
      </div>
    </div>
  );

  
}

export default App;
