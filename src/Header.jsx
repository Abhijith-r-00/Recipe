import React from 'react'
import './header.css'
function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <a href="#" className="logo">🍽️ MyRecipes</a>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header