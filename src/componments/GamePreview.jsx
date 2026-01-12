import React from 'react'
import { Link } from 'react-router-dom'

const GamePreview = ({game}) => {
  return (
    <Link className='gamePreview' to={'/game/' + game.id}>
      <p>{game.title}</p>

      <img alt={game.title} src={game.thumbnail}/>
      <p>{game.short_description}</p>
    </Link>
  )
}

export default GamePreview
