import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        {/* Logo */}
        <Link to='/randomGame'>🎲Feeling Lucky?🎲</Link>
        <Link to='/'><h1>Random API Games</h1></Link>
        <Link to='/about'>About</Link>
      </header>
    </div>
  )
}

export default Header
