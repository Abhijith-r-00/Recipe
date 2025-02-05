import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
  useEffect(() => {
    getRecipes();
  }, [])

  const [Recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getRecipes = async () => {
    try {
      const baseUrl = 'https://dummyjson.com/recipes';
      const serverResponse = await fetch(baseUrl);
      const recipesData = await serverResponse.json();
      setLoading(false);
      setRecipes(recipesData.recipes);
    } catch (err) {
      console.log("Error fetching data:", err);
      setLoading(false);
      setError("Failed to load recipes.");
    }


  }
  
  return (
    <>
      
      {loading ? (
        <div><h2 style={{textAlign:"center",marginTop:"300px"}}>Loading...</h2></div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
        <Header />
        <Content prop={Recipes} />
        <Footer />
        </>
      )}
      
    </>
  )
}

export default App
