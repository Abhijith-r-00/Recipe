import React, { useEffect, useState } from 'react'
import './Content.css'
function Content() {
    useEffect(()=>{
        getRecipes();
    },[])
    
    const[Recipes,setRecipes]=useState([])

    const getRecipes=async()=>{
        const baseUrl='https://dummyjson.com/recipes'
        const serverResponse=await fetch(baseUrl);
        const RecipiesData= await serverResponse.json();
        // console.log(RecipiesData.recipes);
        
        setRecipes(RecipiesData.recipes);

    }
  return (
    <div>
        <div className= 'sticky-heading'>
            
            <h1 className="gradient-text ">Delicious Recipes</h1>
            </div>
        {/* <h1 style={{textAlign:'center'}}>Multi Cuisine Recipe</h1> */}
    <div className="recipe-container">
      {Recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          <h3 className="recipe-title">{recipe.name}</h3>
          <p className="recipe-price">{recipe.cuisine}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Content