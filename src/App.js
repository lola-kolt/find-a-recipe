import './App.css';
import { useEffect, useState } from 'react';
import video from './cook.mp4';
import searchIcon from './search100.png'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID= "c3a36a55";
  const MY_KEY ="6a644eed77c00453e3951803696da7ef";

// states
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado')

  useEffect(() => {
    const getAPI = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data)
      setMyRecipes(data.hits)
    }
    getAPI();
  }, [wordSubmitted])

  const myRecipeSearch =(e) => {
    console.log(e.target.value)
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }


  return (
    <div>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={ video } type="video/mp4" />
        </video>
        <h1 className='flex'>Find A Recipe</h1>
      </div>

      <div className='container'>
        <form className='flex' onSubmit={ finalSearch }>
          <input type="text" placeholder='Search...' className='inputField' onChange={ myRecipeSearch } value={ mySearch }/>
          <button className='btn'>
            <img src={ searchIcon } alt="searchIcon" width="32px" />
          </button>
        </form>
      </div>

      {myRecipes.map(element => (
        <MyRecipesComponent
        id={ element.id }
        label={ element.recipe.label }
        cuisineType={ element.recipe.cuisineType }
        image={ element.recipe.image }
        calories= { element.recipe.calories}
        ingredients={ element.recipe.ingredientLines } />
      ))}
    </div>
  );
}

export default App;

