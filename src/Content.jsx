import React, { useEffect, useState } from 'react'
import './Content.css'

function Content({prop}) {
//  console.log(prop);
 
  return (
    <div><div className='sticky-heading'>

        <h1 className="gradient-text ">Delicious Recipes</h1>
      </div>
        
      <div className="recipe-container">
        {prop.map((recipe) => (
    
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