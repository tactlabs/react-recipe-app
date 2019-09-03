import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID  = "cc614ec7";
  const APP_KEY = "12c49017f3fd40021ab23937ec9946d5";

  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //const [counter, setCounter] = useState(0);

  const [recipes, setRecipes]  = useState([]);

  useEffect( () => {
    //console.log('Effect has been run');

    getRecipes();

  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();

    //console.log(data);

    //console.log(data.hits);

    //console.log(data.hits);

    setRecipes(data.hits);
  }

  return (
    <div className="App">
      
      
      <form className="search-form">
        <input className="search-bar" type="text" />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {recipes.map( (recipe, index ) => (
          <Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories}
          image={recipe.recipe.image} />
      ))}
    </div>
  );
}

export default App;
